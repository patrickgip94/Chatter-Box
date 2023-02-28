function HomePage() {
  return (
    <div className="flex flex-col items-center text-white h-screen px-2 justify-center">
      <h1 className="text-5xl font-bold mb-20">Chatter Box</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* SUN ICON */}
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain something to me!"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
