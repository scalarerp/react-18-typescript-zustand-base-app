import { useMediaQuery } from 'usehooks-ts'
import { useIsOpenStore } from 'store/isOpenStore'
import { panels } from './constants'
// import { goTo, IRoutePaths } from 'router'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { pathname } = useLocation()

  const { closeByName } = useIsOpenStore()
  const menuItems = panels.map((x) => {
    return {
      ...x,
      id: x.id,
      label: x.id,
      active: pathname.includes(x.id),
      onClick: async () => {
        closeByName('sidebar')
      },
    }
  })

  return (
    <div
      className="sidebar d-flex flex-column "
      style={{ width: isMobile ? 'auto' : 300 }}
    >
      {isMobile && <div className="p-3">Logout</div>}
      <ul className="list-group">
        {menuItems.map((x) => (
          <li
            className={`list-group-item ${x.active ? 'active' : ''}`}
            key={x.id}
          >
            <div
              className="d-flex gap-2"
              role="button"
              onClick={() => x.onClick()}
            >
              {x.icon}
              <span className="fs- fw-semibold">{x.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
