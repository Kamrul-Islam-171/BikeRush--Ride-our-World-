

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-10">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
          alt="No Data" 
          className="w-40 h-40 opacity-80"
        />
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          No Data Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, we couldn't find any products matching your search.
        </p>
      </div>
    );
};

export default NotFound;