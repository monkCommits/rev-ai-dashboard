import { BRAND } from '../../types/brand';

const brandData: BRAND[] = [
  {
    name: '1001', // Bill No
    visitors: '2024-12-01', // Service Date
    revenues: '$1,200', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 1', // Trigger
  },
  {
    name: '1002', // Bill No
    visitors: '2024-12-03', // Service Date
    revenues: '$950', // Service Amount
    sales: 'Pending', // Payment Status
    conversion: 'Stage 2', // Trigger
  },
  {
    name: '1003', // Bill No
    visitors: '2024-12-05', // Service Date
    revenues: '$1,450', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 2', // Trigger
  },
  {
    name: '1004', // Bill No
    visitors: '2024-12-07', // Service Date
    revenues: '$870', // Service Amount
    sales: 'Pending', // Payment Status
    conversion: 'Stage 1', // Trigger
  },
  {
    name: '1005', // Bill No
    visitors: '2024-12-10', // Service Date
    revenues: '$1,750', // Service Amount
    sales: 'Paid', // Payment Status
    conversion: 'Stage 3', // Trigger
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Clients
      </h4>

      <div className="flex flex-col">
        {/* Header Row */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
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
        </div>

        {/* Data Rows */}
        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
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
                    : 'text-green-500' // Green text for "Paid"
                } font-medium`}
              >
                {brand.sales}
              </p>
            </div>

            {/* Service Amount */}
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.revenues}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
