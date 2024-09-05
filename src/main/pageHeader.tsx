// import { useMediaQuery } from 'usehooks-ts'

// import { useIsOpenStore } from 'store/isOpenStore'

// import { CloseSvg, MenuSvg } from 'common/SvgIcons'
// import Sidebar from 'common/sideBar'

// import { useEffect } from 'react'

const PageHeader = () => {
  // const isMobile = useMediaQuery('(max-width: 768px)')
  // const { openByName, isOpen, closeByName } = useIsOpenStore()

  // const isOpenSidebar = isMobile && isOpen('sidebar')
  // const showBurgerMenu = isMobile

  // useEffect(() => {
  //   if (isMobile) {
  //     openByName('sidebar')
  //   }
  //   return () => {
  //     closeByName('sidebar')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isMobile])

  return (
    <>
      <header className="p-3" style={{ color: 'white' }}>
        <div className="d-flex justify-content-between align-items-start ">
          <div className="d-flex gap-3">App</div>

          {/* <div className="d-flex gap-3">
            {showBurgerMenu && (
              <MenuSvg
                size={38}
                role="button"
                onClick={() => openByName('sidebar')}
              />
            )}
          </div> */}
        </div>
      </header>

      {/* <div className={`sidebar_mobile p-3  ${isOpenSidebar ? '' : 'hide'}`}>
        <div className="p-2">
          <CloseSvg role="button" onClick={() => closeByName('sidebar')} />
        </div>
        <div className="w-100">
          <Sidebar />
        </div>
      </div> */}
    </>
  )
}

export default PageHeader
