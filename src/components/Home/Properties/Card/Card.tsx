import { PropertyHomes } from "@/types/properyHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Карточка полностью совместима со старым использованием.
 * Добавлены:
 * - защита от пустого item,
 * - плейсхолдер картинки,
 * - фиксированные высоты изображений + object-cover для аккуратного кропа,
 * - условный показ цены (если rate не задан — кнопки нет).
 */
const PropertyCard: React.FC<{ item?: PropertyHomes }> = ({ item }) => {
  if (!item) return null;

  const {
    name = "",
    location = "",
    rate,
    beds,
    baths,
    area,
    slug = "",
    images = [],
  } = item;

  const mainImage = images[0]?.src || "/images/placeholder.jpg";

  return (
    <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
      {/* Изображение с фиксированной высотой на брейкпоинтах */}
      <div className="overflow-hidden rounded-t-2xl">
        <Link href={slug ? `/properties/${slug}` : "#"} aria-label={name || "Property"}>
          <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[300px]">
            <Image
              src={mainImage}
              alt={name || "Property image"}
              fill
              className="object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-110 transition duration-300"
              unoptimized
            />
          </div>
        </Link>

        <div className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block">
          <Icon icon="solar:arrow-right-linear" width={24} height={24} className="text-black" />
        </div>
      </div>

      {/* Контент */}
      <div className="p-6">
        <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6">
          <div>
            <Link href={slug ? `/properties/${slug}` : "#"} aria-label={name || "Property"}>
              <h3 className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary">
                {name || "Без названия"}
              </h3>
            </Link>

            {location && (
              <p className="text-base font-normal text-black/50 dark:text-white/50">
                {location}
              </p>
            )}
          </div>

          {rate !== undefined && rate !== null && rate !== "" && (
            <span className="text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10">
              ${rate}
            </span>
          )}
        </div>

        <div className="flex">
          <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8">
            <Icon icon="solar:bed-linear" width={20} height={20} />
            <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
              {beds ?? "—"} Bedrooms
            </p>
          </div>

          <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8">
            <Icon icon="solar:bath-linear" width={20} height={20} />
            <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
              {baths ?? "—"} Bathrooms
            </p>
          </div>

          <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
            <Icon icon="lineicons:arrow-all-direction" width={20} height={20} />
            <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
              {area ?? "—"}m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

