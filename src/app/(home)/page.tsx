import Link from "next/link";
import api from "@/data/api";

async function getReportHealthySurvivors() {
  const response = await api('/reports/healthy-survivors/30')
  return await response.json()
}

async function getReportInfectedSurvivors() {
  const response = await api('/reports/infected-survivors/30')
  return await response.json()
}

async function getReportAverageResourceAllocation() {

}

export default async function Home() {
  const reportHealthySurvivors = await getReportHealthySurvivors()
  const reportInfectedSurvivors = await getReportInfectedSurvivors()
  console.log(reportInfectedSurvivors)


  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href={"/"} className="group relative col-span-3 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex flex-col justify-between p-5">
        <div>
          <h3 className="text-xl text-white font-bold mb-2">Healthy Survivors</h3>
          <p className="text-lg font-semibold text-gray-300 mb-4">{reportHealthySurvivors.currentPeriodCount}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-green-700 text-white font-semibold py-1 px-3 rounded-full">{reportHealthySurvivors.percentageChange}%</span>
            <span className="text-sm text-gray-300">Last 30 days</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">The number of healthy survivors and the variation since last month</p>
        </div>

        <div className="self-start">
          <button className="flex text-sm items-center gap-2 bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-150 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Download Report
          </button>
        </div>
      </Link>


      <Link href={"/"} className="group relative col-span-3 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex flex-col justify-between p-5">
        <div>
          <h3 className="text-xl text-white font-bold mb-2">Infected Survivors</h3>
          <p className="text-lg font-semibold text-gray-300 mb-4">{reportInfectedSurvivors.currentPeriodCount}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-red-700 text-white font-semibold py-1 px-3 rounded-full">{reportInfectedSurvivors.percentageChange}%</span>
            <span className="text-sm text-gray-300">Last 30 days</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">The number of infected survivors and the variation since last month</p>
        </div>

        <div className="self-start">
          <button className="flex text-sm items-center gap-2 bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-150 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Download Report
          </button>
        </div>
      </Link>


      <Link href={"/"} className="group relative col-span-3 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex flex-col justify-between p-5">
        <div>
          <h3 className="text-xl text-white font-bold mb-2">Average Resource Allocation</h3>
          <p className="text-lg text-blue-500 mb-4 bg-gray-800 y-700 text-center font-semibold py-1 px-3 rounded-full">Water</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-red-700 text-white font-semibold py-1 px-3 rounded-full">-4%</span>
            <span className="text-sm text-gray-300">4 days worth</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">Manage your items wisely</p>
        </div>

        <div className="self-start">
          <button className="flex text-sm items-center gap-2 bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-150 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Download Report
          </button>
        </div>
      </Link>

    </div>
  );
}
