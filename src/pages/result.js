import TimeFilterCollapsible from '@/component/Collapsible/TimeFilterCollapsible'
import TransitFilterCollapsible from '@/component/Collapsible/TransitFilterCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import Button from '../component/Button'
import Image from 'next/image'
import Flight from 'public/image/flight.svg'
import Ic_Switch from 'public/icon/switch.svg'
import Ic_Calendar from 'public/icon/calendar.svg'
import Ellipse from 'public/icon/ellipse.svg'
import React from 'react'

function Result() {
  return (
    <>
      <div className="h-[264px] w-full bg-white pt-[84px]">
        <div className="max-w-[1200px] mx-auto h-full">
          {/* flight destination */}
          <div className="grid grid-cols-12 pt-10">
            <Image className="" h={50} w={50} src={Flight} alt="flight" />

            <div className="col-span-9">
              <p className="text-[#131316]/[.60] text-base">
                Silakan pilih keberangkatan penerbangan.
              </p>
              <div className="flex flex-row my-2">
                <p className="text-2xl text-medium text-[#131316]">Jakarta</p>{" "}
                <Image
                  className="mx-3"
                  src={Ic_Switch}
                  height="14"
                  width="14"
                  alt="switch icon"
                />
                <p className="text-2xl text-medium text-[#131316]">
                  Yogyakarta
                </p>{" "}
                
              </div>
              <div className="flex flex-row">
                <Image
                  className="mr-3 my-0 ml-0"
                  src={Ic_Calendar}
                  height="18"
                  width="18"
                  alt="calendar icon"
                />
                <p className="text-[#131316]/[.80]">8 Juni - 4 Juli 2023</p>
                <Image
                  className="mx-4"
                  src={Ellipse}
                  h={10}
                  w={10}
                  alt="calendar icon"
                />
                <p className="text-[#131316]/[.80]">5 Penumpang</p>
                <Image
                  className="mx-4"
                  src={Ellipse}
                  h={10}
                  w={10}
                  alt="calendar icon"
                />
                <p className="text-[#131316]/[.80]">Ekonomi</p>
              </div>
            </div>

            <Button
              // onClick={() => }
              className="col-span-2 bg-[#EFF0F3] text-[#326BF1] my-5"
            >
              Ganti Pencarian
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[320px_820px] gap-10 mt-4 max-w-[1200px] mx-auto">
        <div className="h-fit border border-gray-100">
          <p className="text-xl">Filter</p>
          <div className="bg-white mt-4 rounded h-fit px-4">
            {/* filter sidebar */}
            <TimeFilterCollapsible name="waktu" />
            <hr />
            <TransitFilterCollapsible name="Transit" />
          </div>
        </div>
        <div className="h-20 border border-gray-100">
          <div className="grid grid-cols-3 gap-6">{/* filter ticket */}</div>
          <div className="flex flex-col gap-6">{/* ticket */}</div>
        </div>
      </div>
    </>
  );
}
Result.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Result
