function TopScrollBtn() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return <button onClick={handleButtonClick}> ^ </button>;
}

export default TopScrollBtn;
