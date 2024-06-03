import Button2 from "@/components/Button/Button2";
const PriceList = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-primary-300 h-52">
        <h1 className="text-4xl font-semibold">PRICE LIST</h1>
      </div>
      <div className="min-h-screen p-4 bg-secondary-600 sm:p-20">
        {/* Tables Section */}
        <div className="grid grid-cols-1 gap-10 text-xs md:text-base">
          {/* Massage Table */}
          <div className="p-4 bg-white rounded-lg shadow-lg sm:p-8">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl text-primary-350">
              Massage
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead className="text-primary-350">
                  <tr>
                    <th className="px-2 py-2 border">Treatment</th>
                    <th className="px-2 py-2 border">45 Min</th>
                    <th className="px-2 py-2 border">60 Min</th>
                    <th className="px-2 py-2 border">90 Min</th>
                    <th className="px-2 py-2 border">120 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Head, Back, Neck, Shoulder
                    </td>
                    <td className="px-2 py-2 border">R350</td>
                    <td className="px-2 py-2 border">R420</td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Foot Reflexology
                    </td>
                    <td className="px-2 py-2 border">R350</td>
                    <td className="px-2 py-2 border">R420</td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Deep Tissue Added on
                    </td>
                    <td className="px-2 py-2 border">R50</td>
                    <td className="px-2 py-2 border">R50</td>
                    <td className="px-2 py-2 border">R50</td>
                    <td className="px-2 py-2 border">R50</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Traditional Thai Massage
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R420</td>
                    <td className="px-2 py-2 border">R600</td>
                    <td className="px-2 py-2 border">R800</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Thai Oil Mix Massage (***)
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R420</td>
                    <td className="px-2 py-2 border">R600</td>
                    <td className="px-2 py-2 border">R800</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Deep Tissue Massage
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R470</td>
                    <td className="px-2 py-2 border">R670</td>
                    <td className="px-2 py-2 border">R850</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Thai Herbal Heat Compression
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R550</td>
                    <td className="px-2 py-2 border">R670</td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Thai Hot Oil Massage
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R450</td>
                    <td className="px-2 py-2 border">R650</td>
                    <td className="px-2 py-2 border">R850</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Hot Stone Massage
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R550</td>
                    <td className="px-2 py-2 border">R670</td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs md:text-sm">
              (***) Most Popular Massages
            </p>
          </div>
          {/* Beauty Table */}
          <div className="p-4 bg-white rounded-lg shadow-lg sm:p-8">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl text-primary-350">
              Beauty
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead className="text-primary-350">
                  <tr>
                    <th className="px-2 py-2 border">Treatment</th>
                    <th className="px-2 py-2 border">60 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Deep Cleansing Facial (***)
                    </td>
                    <td className="px-2 py-2 border">R450</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 font-semibold border">
                      Body Scrub
                    </td>
                    <td className="px-2 py-2 border">R450</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs md:text-sm">
              (***) Most Popular Beauty Treatments
            </p>
          </div>

          {/* Spa Packages Table */}
          <div className="p-4 mb-10 bg-white rounded-lg shadow-lg sm:p-8">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl text-primary-350">
              Spa Packages
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead className="text-primary-350">
                  <tr>
                    <th className="px-2 py-2 border">Treatment</th>
                    <th className="px-2 py-2 border">90 Min</th>
                    <th className="px-2 py-2 border">120 Min</th>
                    <th className="px-2 py-2 border">150 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 border">
                      <span className="font-semibold">Happy Feet Package</span>:
                      Foot Scrub and Foot Massage
                    </td>
                    <td className="px-2 py-2 border">R550</td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 border">
                      <span className="font-semibold">In a Rush Package </span>:
                      Body Scrub, Shower, Oil Massage{" "}
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R850</td>
                    <td className="px-2 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="px-2 py-2 border">
                      <span className="font-semibold">
                        Anti Stress Package (***)
                      </span>
                      : Thai Oil Mix, Head Foot Massage, Shower, Facial
                    </td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border"></td>
                    <td className="px-2 py-2 border">R950</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs md:text-sm">
              (***) Most Popular Packages
            </p>
          </div>
        </div>
      </div>
      <Button2 />
    </>
  );
};

export default PriceList;
