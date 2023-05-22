const sendRequest = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    return err;
  }
};

export default sendRequest