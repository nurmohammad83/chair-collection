import React from 'react';

const CheckOut = () => {

    return (
        <section className="p-6 bg-stone-200 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Happy shopping</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" name='first' placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" name='last' placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" name='email' placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">Address</label>
					<input id="address" name='address' type="text" placeholder="" className="w-full  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">City</label>
					<input id="city" name='city' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">State / Province</label>
					<input id="state" type="text" name='state' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" name='post' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
			</div>
		</fieldset>
        <button type="button" className="px-8 py-3 w-36 mx-auto hover:bg-emerald-600 hover:text-white font-semibold border border-black rounded-full bg-gray-100 dark:text-gray-800">Payment</button>
	</form>
</section>
    );
};

export default CheckOut;