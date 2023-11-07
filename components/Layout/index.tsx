import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContentWrapper } from "./styles";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
}
