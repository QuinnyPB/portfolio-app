import "@/app/styles/global.css";
import "./Header.css";

function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex border-b w-full border-white/20 shadow-sm rounded-b-xl backdrop-blur-2xl justify-center">
        <div className="flex flex-row w-full max-w-7xl px-12 py-4 pt-6 justify-between items-baseline">
          <div>
            {/* &#39 == ' If I wish to replace it later */}
            <p className="header-title font-medium">Quinn's Workspace</p>
          </div>

          {/* Text links on >= md, menuIcon on < sm */}
          <div className="flex flex-row ml-auto gap-4 lg:text-xl md:text-lg font-medium">
            <div className="header-item hover:bg-gradient-to-br hover:from-[var(--main-color-1)] hover:to-[var(--main-color-2)]">
              Home
            </div>

            <div className="header-item hover:bg-gradient-to-br hover:from-[var(--main-color-1)] hover:to-[var(--main-color-2)]">
              My Projects
            </div>
            <div
              className="header-item hover:bg-gradient-to-br hover:from-[var(--main-color-1)] hover:to-[var(--main-color-2)]"
              id="header-option"
            >
              Web Practice
            </div>
            {/* dark/light mode */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
