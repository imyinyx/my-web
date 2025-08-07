export default function GlobalFooter() {
  return (
    <footer className="global-footer border-t border-gray-200 py-8 px-4">
      <div className="footer-meta max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. 保留所有权利。
        </p>
        <p className="text-xs text-gray-400 mt-2">
          京ICP备xxxxxxxx号
        </p>
      </div>
    </footer>
  )
}
