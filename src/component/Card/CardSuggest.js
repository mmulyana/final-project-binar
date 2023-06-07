import React from 'react'
import Image from 'next/image'
import picture1 from 'public/image/picture1.png'
import picture2 from 'public/image/picture2.png'
import picture3 from 'public/image/picture3.png'
import picture4 from 'public/image/picture4.png'


export default function CardSuggest({ data }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-[200px] relative rounded-t-md rounded-b-md ">
          <div class="flex flex-col rounded-lg bg-white md:flex-row">
            <Image
              src={picture1}
              h={100}
              w={100}
              className="w-1/2 h-2/2 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            />
            <div class="flex flex-col justify-start p-6 my-auto">
              <h5 class="mb-1 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Singapura
              </h5>
            </div>
          </div>
        </div>

        <div className="h-[200px] relative rounded-t-md rounded-b-md ">
          <div class="flex flex-col rounded-lg bg-white  md:flex-row">
            <Image
              src={picture2}
              h={100}
              w={100}
              className="w-1/2 h-2/2 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            />
            <div class="flex flex-col justify-start p-6 my-auto">
              <h5 class="mb-1 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Korea Selatan
              </h5>
            </div>
          </div>
        </div>

        <div className="h-[200px] relative rounded-t-md rounded-b-md ">
          <div class="flex flex-col rounded-lg bg-white  md:flex-row">
            <Image
              src={picture3}
              h={100}
              w={100}
              className="w-1/2 h-2/2 rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
            />
            <div class="flex flex-col justify-start p-6 my-auto">
              <h5 class="mb-1 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Jepang
              </h5>
            </div>
          </div>
        </div>

        <div className="h-[200px] relative rounded-t-md rounded-b-md ">
          <div class="flex flex-col rounded-lg bg-white  md:flex-row">
            <Image
              src={picture4}
              h={100}
              w={100}
              className="w-1/2 h-2/2 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            />
            <div class="flex flex-col justify-start p-6 my-auto">
              <h5 class="mb-1 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Swiss
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
}
