import LoginLeft from "../components/LoginLeft";
import LoginRight from "../components/LoginRight";


export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <LoginLeft />
      <LoginRight />
    </main>
  );
}