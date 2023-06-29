import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";
import { createSubscribeLetter } from "../../utils/email/createSubscribeLetter";
import { createUnSubscribeLetter } from "../../utils/email/createUnSubscribeLetter";

const addSubscriber = createAsyncThunk(
  "subscribe/addSubscriber",
  async (emailForm) => {
    const { res, err } = await request({
      url: `/subscribers`,
      method: "POST",
      body: {
        email: emailForm,
        letterSubject: "Welcome to the TechnoKit Newsletter",
        letterHtml: createSubscribeLetter(),
      },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't add subscriber: ${err.data}`);
  },
);

const updateSubscriber = createAsyncThunk(
  "subscribe/updateSubscriber",
  async (emailForm) => {
    const { res, err } = await request({
      url: `/subscribers/email/${emailForm}`,
      method: "PUT",
      body: {
        enabled: false,
        letterSubject: "Unsubscribed successfully",
        letterHtml: createUnSubscribeLetter(),
      },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update subscriber: ${err.data}`);
  },
);

export { addSubscriber, updateSubscriber };
