import { ReactChildren } from "@/types";
import Search from "./components/Search";

export default function RootTemplate({ children }: ReactChildren) {
  return (
    <>
      <div className="px-16 sm:px-40">
        <Search/>
      </div>
      {children}
    </>
  );
}
