'use client';

import { Fragment, MutableRefObject, useEffect, useState } from 'react';
import '../styles/css/configCarousel.css';
import { Dialog, Disclosure, Popover } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { styles } from '../lib/styles';
import BootstrapCarousel from '../lib/carousel';
import {
  KeenSliderHooks,
  KeenSliderInstance,
  useKeenSlider,
} from 'keen-slider/react';
import ThumbnailPlugin from '../lib/carousel';
import 'keen-slider/keen-slider.min.css';

export default function ContentX(props: any) {
  useEffect(() => {
    console.log(props.data);
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <div className="container p-0 m-0 w-full">
      <div className="flex flex-wrap">
        <h2 className="text-xl pt-2 font-bold">
          {props.data.index}. {props.data.role}
        </h2>
        <p className="text-1xl p-2">{props.data.content}</p>
        <div className="w-full">
          <>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {props.data.images.map((item: any, index: Number) => {
                return (
                  <div className="image-gap keen-slider__slide" key={index}>
                    <img
                      src={item.imageUrl}
                      className={
                        props.data.mainKey[0] == 'flutter'
                          ? 'image-content-big'
                          : 'image-content'
                      }
                    />
                  </div>
                );
              })}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
