"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-transparent mt-12">
      <div className="container py-8 flex items-center justify-between">
        <div className="text-sm text-muted">© {new Date().getFullYear()} Shop — Built with care</div>
        <div className="text-sm text-muted">Help · Terms · Privacy</div>
      </div>
    </footer>
  );
}
