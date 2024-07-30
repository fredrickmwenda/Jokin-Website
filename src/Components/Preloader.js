import CursorElements from './CursorElements';

const Preloader = () => (
  <div id="preloader" className="preloader">
    <button className="th-btn preloaderCls">Cancel Preloader </button>
    <div id="loader" className="th-preloader">
      <div className="animation-preloader">
        <div className="txt-loading">
          <span preloader-text="J" className="characters">J </span>
          <span preloader-text="O" className="characters">O</span>
          <span preloader-text="K" className="characters">K</span>
          <span preloader-text="I" className="characters">I</span>
          <span preloader-text="N" className="characters">N</span>
        </div>
      </div>
    </div>
    <CursorElements />
  </div>
);

export default Preloader;
