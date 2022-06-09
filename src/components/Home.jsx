function Home() {
  console.log(`Home`);
  const greeting = 'welcome';
  return (
    <div className="home min-h-[20em]">
      <h4 className="text-5xl font-bold">{greeting}</h4>
    </div>
  );
}

export default Home;
