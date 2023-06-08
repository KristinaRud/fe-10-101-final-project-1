import { Container } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";

const Registration = () => {
  return (
    <Container>
      <BreadcrumbsApp />
      <RegistrationForm />
    </Container>
  );
};

export default Registration;
