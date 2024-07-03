import Footer from "../Footer/Footer";

const Layout = ({ background, children }: { background: string, children: React.ReactNode }) => {
  const style = {
    backgroundImage: `url(${background})`
  }
  return (
    <div className='flex flex-col w-full h-full gap-8 p-6 bg-fixed bg-center bg-no-repeat bg-cover bg-slate-600' style={style}>
      <div className='flex flex-col justify-between w-full max-w-4xl gap-6 p-5 mx-auto shadow-md rounded-2xl bg-slate-100'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;

