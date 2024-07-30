const PopupSearchBox = () => (
    <div className="popup-search-box">
      <button className="searchClose"><i className="fal fa-times"></i></button>
      <form action="#">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit"><i className="fal fa-search"></i></button>
      </form>
    </div>
  );
  
  export default PopupSearchBox;
  