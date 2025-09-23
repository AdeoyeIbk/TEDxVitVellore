export default function Footer() {
  return (
    <footer className="bg-tedx-black text-white py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base lg:text-lg">
          &copy; {new Date().getFullYear()} TEDxVitVellore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
