export default function Home() {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProfileProgress
            percentage={60}
            onComplete={() => console.log('Complete profile clicked')}
          />
          <AvailableProjects />
          <BoostSection />
        </div>
      </main>
    );
  }