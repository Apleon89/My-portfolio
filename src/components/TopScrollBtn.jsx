function TopScrollBtn() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return <button className="btn topScrollBtn" onClick={handleButtonClick}> ^ </button>;
}

export default TopScrollBtn;
