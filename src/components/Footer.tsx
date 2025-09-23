export default function Footer() {
  return (
    <footer className="bg-tedx-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} TEDxVitVellore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
