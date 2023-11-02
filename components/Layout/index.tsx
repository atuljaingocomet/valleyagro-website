import { ReactNode } from "react";
import Navbar from "./Navbar";
import { ContentWrapper } from "./styles";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      {/* <Footer /> */}
    </>
  );
}