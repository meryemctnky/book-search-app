const Navbar = () => {
  return (
    <nav className='w-full bg-olive text-jet'>
      <div className='container mx-auto py-2 flex justify-between'>
        <div className='flex flex-col justify-between sm:flex-row py-1'>
          <p className='text-lg text-jet font-semibold'>BookSearch</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
