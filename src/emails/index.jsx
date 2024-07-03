import { Tailwind, Button, Hr } from "@react-email/components";

const Email = (props) => {
  const {name, email, company, budget, message} = props
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#100028",
            },
          },
        },
      }}
    >
      <h2>Client Name: {name}</h2>
      <h2>Client Email: {email}</h2>
      <h2>Client Company: {company}</h2>
      <p>Client Budget: {budget}</p>
      <Hr />
      <p>
        {message}
      </p>
    </Tailwind>
  );
};

export default Email