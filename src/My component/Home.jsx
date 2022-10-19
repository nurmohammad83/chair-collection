
import { Link} from 'react-router-dom';

import About from './About';
import Products from './Products';


const Home = () => {
	
    return (
		<>
        <section className="bg-gray-200 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<p className="mt-6 mb-8 text-lg sm:mb-12">
                Chair Collection 2022
			</p>
			<h1 className="text-5xl font-bold leading-none sm:text-6xl"><span className='text-orange-400'>Welcome </span><br />
				To Bangla Vai Furniture
			</h1>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start pt-4">
				<Link rel="noopener noreferrer" to='/cart' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:text-gray-900">DETAILS</Link>
				<Link rel="noopener noreferrer" to='/products' className="px-8 py-3 text-lg font-semibold border rounded hover:bg-orange-500/100 hover:text-white dark:border-gray-100 bg-indigo-500">SHOP NOW</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 pr-9">
			<img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-17.png" alt="" className="object-contain h-72 sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

<section className='bg-green-100 py-8'>
	<Products/>
</section >
<section className='bg-slate-500 py-8 text-white'>
	
	<About/>

</section>
</>
    );
};

export default Home;