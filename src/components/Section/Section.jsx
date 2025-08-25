import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";

function Section() {
  return (
    <section>
      {/*Top Albums */}
      <Albums url={"https://qtify-backend-labs.crio.do/albums/top"} title="Top Albums" key="Top Albums" />

      {/*New Albums */}
      <Albums url={"https://qtify-backend-labs.crio.do/albums/new"} title="New Albums" key="New Albums" />

      {/* Songs */}
      <Songs />
    </section>
  );
}

export default Section;
