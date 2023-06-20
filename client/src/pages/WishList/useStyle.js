import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    margin: "0 auto",
    flexDirection: "column",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  box: {
    display: "flex",
    gap: "35px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  boxContainer: {
    paddingBottom: "18px",
  },
  summary: {
    background: "#F5F7FF",
    padding: "18px 35px",
  },
  summaryWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "30.66%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "210%",
    color: "#000000",
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto",
    height: "50px",
    background: "#0156FF",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      height: "37px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  btnButton: {
    marginTop: theme.spacing(4),
    width: "200px",
    height: "37px",
    background: "#000000",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 61px",
      width: "308px",
      height: "38px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  clearContBtnBox: {
    display: "flex",
    gap: "7px",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "0",
      alignItems: "center",
    },
  },
  continueButton: {
    border: "2px solid #A2A6B0",
    background: "none",
    color: "#A2A6B0",
  },
  desktopSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  tabletSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  container: {
    alignItems: "flex-end",
  },
}));

export default useStyles;
