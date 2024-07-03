const banner = ({ img, children }: { img?: string, children?: React.ReactNode }) => {
  const style = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className='h-24 bg-cover bg-center bg-slate-600' style={style}>
      {children}
    </div>
  )
}

export default banner;
