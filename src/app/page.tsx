import Header from "./components/Header";
import "./home.css";

export default function Home() {
  // controls movable bar upon menu item mouse hover

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      {/* Welcome */}
      <section className="min-h-screen px-4 lg:px-8 py-4">
        <div className="flex m-auto max-w-7xl w-full justify-start">
          {/* <div className="intro-text flex px-8 py-4 border border-white/20 rounded-md shadow-md justify-center"> 
              <p className="intro-text text-xl font-medium text-[#333] text-center"></p>
*/}
          <div className="intro-div max-w-4xl border border-white/20 shadow-md">
            <p>Hi there! I'm Quinn Bruckmann, and this is my Portfolio!</p>
          </div>
        </div>
      </section>
      {/* Link to profiles */}
      <section className="min-h-screen px-4 lg:px-8 ">
        <div>
          <h2 className="text-4xl font-bold">Profiles</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iusto
            illo eligendi, necessitatibus impedit esse commodi odio atque hic
            sed deserunt magnam aspernatur molestiae sunt dicta, officiis,
            temporibus vitae aliquam quas ex! Ipsa incidunt ducimus voluptate
            illo tempore, eaque maiores aut nisi sed culpa, aspernatur corporis
            perspiciatis alias? Corrupti laudantium aspernatur dolorum,
            distinctio vero hic pariatur molestias quaerat sunt, non totam
            fugiat perspiciatis libero magni unde quae consequatur? Reiciendis
            quibusdam repellat cumque delectus! Mollitia reprehenderit laborum
            delectus tenetur culpa fuga, nesciunt unde officia necessitatibus
            assumenda facilis quos ea? Enim similique ducimus rem repellat nemo
            repellendus eaque quas expedita, illo nostrum.
          </p>
        </div>
      </section>
      {/* latest projects */}
      <section className="min-h-screen px-4 lg:px-8 ">
        <div>
          <h2 className="text-4xl font-bold">Projects</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iusto
            illo eligendi, necessitatibus impedit esse commodi odio atque hic
            sed deserunt magnam aspernatur molestiae sunt dicta, officiis,
            temporibus vitae aliquam quas ex! Ipsa incidunt ducimus voluptate
            illo tempore, eaque maiores aut nisi sed culpa, aspernatur corporis
            perspiciatis alias? Corrupti laudantium aspernatur dolorum,
            distinctio vero hic pariatur molestias quaerat sunt, non totam
            fugiat perspiciatis libero magni unde quae consequatur? Reiciendis
            quibusdam repellat cumque delectus! Mollitia reprehenderit laborum
            delectus tenetur culpa fuga, nesciunt unde officia necessitatibus
            assumenda facilis quos ea? Enim similique ducimus rem repellat nemo
            repellendus eaque quas expedita, illo nostrum.
          </p>
        </div>
      </section>
      {/* All html/css/js projects */}
      {/* All project history */}

      <footer className="fixed bottom-0 w-full py-2 border-t-2 border-white/20 rounded-t-md bg-gray-200/40">
        <div className=" w-full top-100 px-12 pt-4 pb-1 justify-start">
          <p className="text-sm">Author: Quinn Bruckmann</p>
          <p className="text-sm">Email: quinnyb64@gmail.com</p>
          <p className="text-sm">
            <a href="https://github.com/QuinnyPB">
              Github: https://github.com/QuinnyPB
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
