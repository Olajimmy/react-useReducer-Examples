import { Link } from "react-router";
function Home() {
  return (
    <div>
      Home Route
      <br />
      <Link to="/counter">Counter example</Link>
      <br />
      <Link to="/adventureparty">Adventure Party Example</Link>
    </div>
  );
}
export default Home;
