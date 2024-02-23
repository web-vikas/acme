import {
    Card,
    CardHeader,
    CardBody
} from "@nextui-org/react";
import SignUpForm from "@/components/forms/signup";
const SignUp = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <Card className="">
        <CardHeader>
          <h1>Sign UP</h1>
        </CardHeader>
        <CardBody>
          <SignUpForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUp;
