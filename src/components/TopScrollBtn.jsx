function TopScrollBtn() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return <button onClick={handleButtonClick}>Volver al inicio</button>;
}

export default TopScrollBtn;
