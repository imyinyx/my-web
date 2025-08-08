import { PERSONAL_INFO } from '../config/constants'

export default function GlobalFooter() {
  return (
    <footer className="global-footer border-t border-gray-200 py-8 px-4">
      <div className="footer-meta max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {PERSONAL_INFO.copyright}. 保留所有权利。
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {PERSONAL_INFO.icp}
        </p>
      </div>
    </footer>
  )
}
