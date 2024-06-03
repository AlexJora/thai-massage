import Button2 from "@/components/Button/Button2";
const PriceList = () => {
  return (
    <>
      <div className="bg-primary-300 w-full h-52 flex items-center justify-center">
        <h1 className="text-4xl font-semibold">PRICE LIST</h1>
      </div>
      <div className="bg-secondary-600 p-4 sm:p-20 min-h-screen">
        {/* Tables Section */}
        <div className="grid grid-cols-1 gap-10 text-xs md:text-base">
          {/* Massage Table */}
          <div className="bg-white p-4 sm:p-8 shadow-lg rounded-lg">
            <h2 className="text-xl sm:text-3xl font-bold mb-4 text-primary-350">
              Massage
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead className="text-primary-350">
                  <tr>
                    <th className="border px-2 py-2">Treatment</th>
                    <th className="border px-2 py-2">45 Min</th>
                    <th className="border px-2 py-2">60 Min</th>
                    <th className="border px-2 py-2">90 Min</th>
                    <th className="border px-2 py-2">120 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Head, Back, Neck, Shoulder
                    </td>
                    <td className="border px-2 py-2">R350</td>
                    <td className="border px-2 py-2">R420</td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Foot Reflexology
                    </td>
                    <td className="border px-2 py-2">R350</td>
                    <td className="border px-2 py-2">R420</td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Deep Tissue Added on
                    </td>
                    <td className="border px-2 py-2">R50</td>
                    <td className="border px-2 py-2">R50</td>
                    <td className="border px-2 py-2">R50</td>
                    <td className="border px-2 py-2">R50</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Traditional Thai Massage
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R420</td>
                    <td className="border px-2 py-2">R600</td>
                    <td className="border px-2 py-2">R800</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Thai Oil Mix Massage (***)
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R420</td>
                    <td className="border px-2 py-2">R600</td>
                    <td className="border px-2 py-2">R800</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Deep Tissue Massage
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R470</td>
                    <td className="border px-2 py-2">R670</td>
                    <td className="border px-2 py-2">R850</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Thai Herbal Heat Compression
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R550</td>
                    <td className="border px-2 py-2">R670</td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Thai Hot Oil Massage
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R450</td>
                    <td className="border px-2 py-2">R650</td>
                    <td className="border px-2 py-2">R850</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Hot Stone Massage
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R550</td>
                    <td className="border px-2 py-2">R670</td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">(***) Most Popular Massages</p>
          </div>
          {/* Beauty Table */}
          <div className="bg-white p-4 sm:p-8 shadow-lg rounded-lg">
            <h2 className="text-xl sm:text-3xl font-bold mb-4 text-primary-350">
              Beauty
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead className="text-primary-350">
                  <tr>
                    <th className="border px-2 py-2">Treatment</th>
                    <th className="border px-2 py-2">60 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Deep Cleansing Facial (***)
                    </td>
                    <td className="border px-2 py-2">R450</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2 font-semibold">
                      Body Scrub
                    </td>
                    <td className="border px-2 py-2">R450</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">(***) Most Popular Beauty Treatments</p>
          </div>

          {/* Spa Packages Table */}
          <div className="bg-white p-4 sm:p-8 shadow-lg rounded-lg mb-10">
            <h2 className="text-xl sm:text-3xl font-bold mb-4 text-primary-350">
              Spa Packages
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead className="text-primary-350">
                  <tr>
                    <th className="border px-2 py-2">Treatment</th>
                    <th className="border px-2 py-2">90 Min</th>
                    <th className="border px-2 py-2">120 Min</th>
                    <th className="border px-2 py-2">150 Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2">
                      <span className="font-semibold">Happy Feet Package</span>:
                      Foot Scrub and Foot Massage
                    </td>
                    <td className="border px-2 py-2">R550</td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2">
                      <span className="font-semibold">In a Rush Package </span>:
                      Body Scrub, Shower, Oil Massage{" "}
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R850</td>
                    <td className="border px-2 py-2"></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-primary-80">
                    <td className="border px-2 py-2">
                      <span className="font-semibold">
                        Anti Stress Package (***)
                      </span>
                      : Thai Oil Mix, Head Foot Massage, Shower, Facial
                    </td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2"></td>
                    <td className="border px-2 py-2">R950</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">(***) Most Popular Packages</p>
          </div>
        </div>
      </div>
      <Button2 />
    </>
  );
};

export default PriceList;
