import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPartners } from "../../../store/slices/partners.slice";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";
import BrandItem from "../../LeftSidear/BrandList/BrandItem/BrandItem";
import s from "./PartnersList.module.scss";

const PartnersList = () => {
  const [limit] = useState(7);
  const partners = useSelector(selectPartners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  return (
    <List className={s.list}>
      {partners.length > 0 &&
        partners
          .slice(0, limit)
          .map((partner) => (
            <BrandItem
              key={partner.customId}
              heightImg="80"
              url={partner.imageUrl}
              href={partner.url}
              className={s.brand}
            />
          ))}
    </List>
  );
};

export default PartnersList;
