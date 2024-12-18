import React, { useState, useEffect } from 'react';
import { BRAND } from '../../types/brand';

const brandData: BRAND[] = [
  {
    name: '1000', // Bill No
    visitors: '2024-12-17', // Service Date
    revenues: '$5,000', // Service Amount
    sales: 'Pending', // Payment Status
    conversion: 'Stage 1', // Trigger
    action: true, // Call button enabled
  },
  {
    name: '1001', // Bill No
    visitors: '2024-12-01', // Service Date
    revenues: '$1,200', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 1', // Trigger
    action: false, // Call button disabled
  },
  {
    name: '1002', // Bill No
    visitors: '2024-12-03', // Service Date
    revenues: '$950', // Service Amount
    sales: 'Pending', // Payment Status
    conversion: 'Stage 2', // Trigger
    action: false, // Call button enabled
  },
  {
    name: '1003', // Bill No
    visitors: '2024-12-05', // Service Date
    revenues: '$1,450', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 2', // Trigger
    action: false, // Call button disabled
  },
  {
    name: '1004', // Bill No
    visitors: '2024-12-07', // Service Date
    revenues: '$870', // Service Amount
    sales: 'Pending', // Payment Status
    conversion: 'Stage 1', // Trigger
    action: false, // Call button enabled
  },
  {
    name: '1005', // Bill No
    visitors: '2024-12-10', // Service Date
    revenues: '$1,750', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 3', // Trigger
    action: false, // Call button disabled
  },
];

const TableOne = () => {
  const [serviceAmount, setServiceAmount] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    // Set initial serviceAmount to the first entry's revenues
    setServiceAmount(brandData[0].revenues);
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'T') {
      setServiceAmount((prevAmount) =>
        prevAmount === '$5,000' ? '$2,500' : '$5,000',
      );

      // Change both the service amount and Payment Status for the first entry
      brandData[0].sales = 'Partial';
      setIsClicked(true); // Mark button as clicked
    }
  };

  const handleClick = (index: number) => {
    brandData[index].action = false; // Disable the action button
    setIsClicked(true); // Mark button as clicked
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Clients
      </h4>

      <div className="flex flex-col" onKeyDown={handleKeyPress} tabIndex={0}>
        {/* Header Row */}
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Bill No.
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Service Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Payment Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Service Amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Trigger
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {/* Data Rows */}
        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            {/* Bill No */}
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            {/* Service Date */}
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            {/* Payment Status */}
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                className={`${
                  brand.sales === 'Pending'
                    ? 'text-red-500' // Red text for "Pending"
                    : brand.sales === 'Partial'
                    ? 'text-yellow-500' // Dark Yellow text for "Partial"
                    : 'text-green-500' // Green text for "Paid"
                } font-medium`}
              >
                {brand.sales}
              </p>
            </div>

            {/* Service Amount */}
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {key === 0 ? serviceAmount : brand.revenues}
              </p>
            </div>

            {/* Trigger */}
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p
                className={`${
                  brand.conversion === 'Stage 1'
                    ? 'text-blue-500'
                    : brand.conversion === 'Stage 2'
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }`}
              >
                {brand.conversion}
              </p>
            </div>

            {/* Action */}
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <button
                className={`px-4 py-2 rounded text-white ${
                  brand.action
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={isClicked}
                onClick={() => handleClick(key)}
              >
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
