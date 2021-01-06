import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략해줌
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>About me</p>
      {showDetail && <p>Detail is true</p>}
    </div>
  );
};
export default About;
