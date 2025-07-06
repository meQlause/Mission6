import { CourseDetailsComponent } from "../components/courseDetails";
import { ShowProductComponent } from "../components/showProduct";
import { ButtonUI } from "../components/UIs/button";
import { DividerUI } from "../components/UIs/divider";
import { ImageAsBackgroudUI } from "../components/UIs/imageAsBackground";
import { StarRatingUi } from "../components/UIs/stars";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import type { CourseDetailsProps } from "../utils/interfaces";

export const ProductsDetailsPage = () => {
  const contents = [
    {
      id: 1,
      contentImage: "assets/contents/content1.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar1.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 2,
      contentImage: "assets/contents/content2.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar2.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 3,
      contentImage: "assets/contents/content3.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar3.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
  ];

  const courseDetails: CourseDetailsProps[] = [
    {
      header: "Course 1: Foundation of User Experience Design",
      subHeader: {
        "The basics of user experience design": {
          kind: "video",
          duration: "12 Menit",
        },
        "Understanding user needs": {
          kind: "video",
          duration: "15 Menit",
        },
        "UX principles and heuristics": {
          kind: "video",
          duration: "10 Menit",
        },
      },
    },
    {
      header: "Course 2: UX Research Methods",
      subHeader: {
        "Introduction to UX research": {
          kind: "video",
          duration: "14 Menit",
        },
        "Conducting interviews and surveys": {
          kind: "video",
          duration: "18 Menit",
        },
        "Analyzing research data": {
          kind: "video",
          duration: "20 Menit",
        },
      },
    },
    {
      header: "Course 3: Wireframing and Prototyping",
      subHeader: {
        "Creating wireframes": {
          kind: "video",
          duration: "16 Menit",
        },
        "Low vs high fidelity prototypes": {
          kind: "video",
          duration: "13 Menit",
        },
        "Tools for prototyping": {
          kind: "video",
          duration: "17 Menit",
        },
        "Interactive prototype testing": {
          kind: "video",
          duration: "11 Menit",
        },
      },
    },
    {
      header: "Course 4: Usability Testing and Iteration",
      subHeader: {
        "Usability testing fundamentals": {
          kind: "video",
          duration: "15 Menit",
        },
        "Planning and conducting usability tests": {
          kind: "video",
          duration: "19 Menit",
        },
        "Analyzing and iterating on feedback": {
          kind: "video",
          duration: "14 Menit",
        },
      },
    },
  ];

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14">
        <p className="text-bodyMedium font-medium">
          Beranda / Desain /
          <strong> Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager</strong>
        </p>
        <ImageAsBackgroudUI className="mb-5" src="/assets/hero.jpg">
          <div className="flex flex-col items-start justify-center gap-5 px-4 py-14 md:px-10 lg:px-20">
            <h1 className="z-20 text-heading3 font-bold text-white md:text-heading1">
              Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager
            </h1>
            <div className="flex flex-col items-start gap-1">
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Belajar bersama tutor di video course.
              </p>
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Kapanpun, dimana pun.
              </p>
            </div>
            <div className="z-30 flex flex-row items-center gap-2">
              <StarRatingUi rating={2.5} size={20} />
              <p className="text-bodyMedium font-medium text-white">
                {2.5} ({86})
              </p>
            </div>
          </div>
        </ImageAsBackgroudUI>

        {/* Description */}
        <div className="flex w-full flex-col-reverse justify-between gap-5 md:flex-row">
          <div className="flex max-w-[770px] flex-col gap-5">
            <DefaultLayout className="rounded-lg p-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-heading6 font-bold">Deskripsi</h2>
                <p className="text-bodyMedium font-medium">
                  Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian
                  tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk
                  melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX
                  fokus pada interaksi yang dilakukan orang dengan produk seperti situs web,
                  aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu
                  dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX
                  tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa
                  sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe,
                  dan maket, dan menguji desain untuk mendapatkan umpan balik.
                </p>
              </div>
            </DefaultLayout>

            {/* Tutor */}
            <DefaultLayout className="rounded-lg p-5 py-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-heading6 font-bold">Belajar Bersama Tutor Professional</h2>
                <div className="flex flex-col justify-evenly gap-5 md:flex-row">
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold"> Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                  </DefaultLayout>
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold"> Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                  </DefaultLayout>
                </div>
              </div>
            </DefaultLayout>

            {/* Course Details */}
            <DefaultLayout className="rounded-lg p-5">
              <div className="flex flex-col gap-5">
                <h2 className="mb-3 text-heading6 font-bold">Kamu akan Mempelajari</h2>
                <div className="flex flex-col gap-3">
                  {courseDetails.map((value, index) => (
                    <CourseDetailsComponent
                      header={value.header}
                      subHeader={value.subHeader}
                      isShow={index === 0 && true}
                    />
                  ))}
                </div>
              </div>
            </DefaultLayout>

            {/* Rating and Review */}
            <DefaultLayout className="rounded-lg p-5 py-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-heading6 font-bold">Rating dan Review</h2>
                <div className="flex flex-col justify-evenly gap-5 md:flex-row">
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di{" "}
                          <strong className="font-bold">Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                    <DividerUI />
                    <div className="flex gap-2">
                      <StarRatingUi rating={2.5} />
                      <p className="text-bodyMedium font-medium text-gray-500">
                        {2.5} ({86})
                      </p>
                    </div>
                  </DefaultLayout>
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold">Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                    <DividerUI />
                    <div className="flex gap-2">
                      <StarRatingUi rating={2.5} />
                      <p className="text-bodyMedium font-medium text-gray-500">
                        {2.5} ({86})
                      </p>
                    </div>
                  </DefaultLayout>
                </div>
              </div>
            </DefaultLayout>
          </div>

          <DefaultLayout className="flex h-fit w-[351px] min-w-[350px] flex-col gap-2 rounded-lg p-5">
            <h2 className="text-heading6 font-bold">
              Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager.
            </h2>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-start gap-2">
                <p className="text-bodyMedium font-bold text-[#3ECF4C]">Rp 250K</p>
                <p className="text-bodyMediumfont-bold text-[#7b7c7b] line-through">Rp 500K</p>
              </div>
              <div className="max-w-24 rounded-md bg-[#ffbd3a] p-1 text-bodySmall font-thin text-white">
                Diskon 50%
              </div>
            </div>
            <p className="text-bodyMedium font-thin text-[#0980E2]">
              Penawaran spesial tersisa 2 hari lagi!
            </p>
            <ButtonUI className="font-bold"> Beli Sekarang </ButtonUI>
            <div className="mt-2 flex w-full flex-col">
              <h3 className="text-bodyMedium font-bold"> Kelas ini sudah termasuk</h3>
              <div className="grid grid-cols-2">
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Ujian Akhir
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    49 Video
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />7 Dokumen
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Sertifikat
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Pretest
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col">
                <h3 className="text-bodyMedium font-bold"> Bahasa Pengantar</h3>
                <div className="grid grid-cols-2">
                  <div className="py-2 text-bodySmall font-thin">
                    <div className="flex flex-row gap-2">
                      <img src="/assets/star.svg" />
                      Bahasa Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DefaultLayout>
        </div>

        {/* Recomendation */}
        <div className="mt-10 flex flex-col">
          <h2 className="text-heading3 font-bold">Video Pembelajaran Terkait Lainnya</h2>
          <p className="text-bodyMedium font-light">
            Expansi Pengetahuan Anda dengan Rekomendasi Spesial Kami.
          </p>
          <ShowProductComponent contents={contents} />
        </div>
      </div>

      <FooterLayout />
    </>
  );
};
