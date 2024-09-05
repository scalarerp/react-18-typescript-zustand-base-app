import useSvg from './useSvg'

const AllSvgIconsGallery = () => {
  const { svgArray } = useSvg(50, 'currentColor')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
        gap: '8px',
        width: '100%',
      }}
    >
      {svgArray.map((x) => {
        return (
          <div
            key={x.name}
            className="d-flex flex-column d-flex justify-content-center p2 m-4"
          >
            <div
              style={{
                color: 'var(--fg-color-read-only-label)',
              }}
            >
              {x.name}
            </div>
            {x.component}
          </div>
        )
      })}
    </div>
  )
}

export default AllSvgIconsGallery
