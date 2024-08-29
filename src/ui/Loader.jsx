function Loader() {
  /*
      inset-0: sets top, bottom, right, left position to 0. 
      /20 - puts 20% opacity to the background.
      backdrop-blur - puts some blurring to the background.
  */
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>;
    </div>
  );
}

export default Loader;
