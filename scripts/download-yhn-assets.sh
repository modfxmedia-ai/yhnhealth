#!/usr/bin/env bash
# Download original homepage assets from yhnhealth.com into public/images/yhn-clone/
set -e
DEST="public/images/yhn-clone"
mkdir -p "$DEST"
BASE="https://cdcssl.ibsrv.net/ibimg/smb"

dl() {
  local url="$1"
  local out="$2"
  if [ ! -f "$DEST/$out" ]; then
    curl -sSL -o "$DEST/$out" "$url"
    echo "  $out"
  fi
}

echo "Hero slider (1903x1036)..."
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b6387787ce6_HomepageSliderPic11.jpg.webp" "hero-1.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b6386daafcd_HomepageSliderPic2.jpg.webp"  "hero-2.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b6386323fc4_HomepageSliderPic3.jpg.webp"  "hero-3.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b63855d1ed0_HomepageSliderPic4.jpg.webp"  "hero-4.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b6383cbc13f_HomepageSliderPic5.jpg.webp"  "hero-5.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b63830edbd6_HomepageSliderPic6.jpg.webp"  "hero-6.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b63823f22c1_HomepageSliderPic7.jpg.webp"  "hero-7.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b6380464638_HomepageSliderPic8.jpg.webp"  "hero-8.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b637f6b710d_HomepageSliderPic9.jpg.webp"  "hero-9.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/66b637e6aa186_HomepageSliderPic10.jpg.webp" "hero-10.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/Arthrostimulation%20Therapy.jpg.webp"          "hero-arthrostim.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/pediatric-care-2.jpg.webp"                     "hero-pediatric.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/Athletic%20Care%201.jpg.webp"                  "hero-athletic.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/functional-movement-restoration-1.jpg.webp"    "hero-movement.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/Functional%20Posture%20Analysis.jpg.webp"      "hero-posture.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/Supplements.jpg.webp"                          "hero-supplements.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/func-med-page-pic-at-top.jpg.webp"             "hero-funcmed.webp"
dl "$BASE/1903x1036_80/webmgr/1x/s/5/func-med-page-telehealth.jpg.webp"             "hero-telehealth.webp"

echo "Welcome / brand..."
dl "$BASE/1400x1400_80/webmgr/1x/s/5/6480e52a1dda4_chiro.jpg.webp"                  "welcome-chiro.webp"
dl "$BASE/2400x1000_80/webmgr/1x/s/5/_SHARED/chiro_spine_model_transparent.png.webp" "spine-model.webp"
dl "$BASE/2000x1429_80/webmgr/1x/s/5/67362507c4d71_health.jpg.webp"                  "health-bg.webp"

echo "Better Care section..."
dl "$BASE/1400x934_80/webmgr/1x/s/5/_SHARED/Stock_Photos/Practice/shutterstock_1293680518.jpg.webp" "practice.webp"
dl "$BASE/1400x935_80/webmgr/1x/s/5/647a66c0ab29a_shutterstock1890952099.jpg.jpg.webp"              "individual-approach.webp"

echo "Team..."
dl "$BASE/710x887_80/webmgr/1x/s/5/66a12f6413403_Dr.ChrisChianesePic1_20240724_1649.jpg.webp" "team-chris.webp"
dl "$BASE/674x843_80/webmgr/1x/s/5/66a12fa25303d_Dr.MarcChianesePic_20240724_1648.jpg.webp"   "team-marc.webp"
dl "$BASE/826x1032_80/webmgr/1x/s/5/66a12fc10f4c5_Dr.LilleeChianesePic_20240724_1654.jpg.webp" "team-lillee.webp"
dl "$BASE/811x1014_80/webmgr/1x/s/5/66a12fdaa46b1_BarbaraChianesePic1_20240724_1655.jpg.webp" "team-barbara.webp"

echo "Service tiles (1400x762)..."
dl "$BASE/1400x762_80/webmgr/1x/s/5/673654274cd34_66b6387787ce6HomepageSliderPic11.jpg.webp" "svc-chiropractic.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/672e68b60df40_FunctionalPostureAnalysis.jpg.webp"        "svc-posture.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/Functional%20Movement%20Restoration%201.jpg.webp"        "svc-movement.webp"
dl "$BASE/1400x1400_80/webmgr/1x/s/5/functional-kinesiology.jpg.webp"                        "svc-kinesiology.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/6734fb1382b72_PregnancyCare1.jpg.webp"                   "svc-pregnancy.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/Webster%20Technique.jpg.webp"                            "svc-webster.webp"
dl "$BASE/1400x2090_80/webmgr/1x/s/5/pediatric-care-1.jpg.webp"                              "svc-pediatric.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/Geriatric%20Care.jpg.webp"                               "svc-geriatric.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/6734fd071fcce_AthleticCare1.jpg.webp"                    "svc-athletic.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/Lyme%20Disease.jpg.webp"                                 "svc-lyme.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/Supplements.jpg.webp"                                    "svc-supplements.webp"
dl "$BASE/1400x583_80/webmgr/1x/s/5/673621b968725_6734ff00f3694chrioart.jpg.webp"            "svc-art.webp"
dl "$BASE/1400x583_80/webmgr/1x/s/5/67362243cac96_6734fee9cc39bIASTMTOOL.jpg.webp"           "svc-iastm.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/6736228d56b56_PercussionTherapy.jpg.webp"                "svc-percussion.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/673622ffe3002_ArthrostimulationTherapy.jpg.webp"         "svc-arthrostim.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/67362341a0118_VibracussionTherapy.jpg.webp"              "svc-vibracussion.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/673623a1bc84c_DecompressionTherapy.jpg.webp"             "svc-decompression.webp"
dl "$BASE/1400x932_80/webmgr/1x/s/5/673623f33603d_servicesDOTexam.jpg.webp"                  "svc-dot.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/func-med-page-pic-at-top.jpg.webp"                        "svc-funcmed.webp"
dl "$BASE/1400x762_80/webmgr/1x/s/5/func-med-page-telehealth.jpg.webp"                        "svc-nutrition.webp"

echo "Logo..."
dl "$BASE/180x180_80/webmgr/1x/s/5/6478d12c3f453_thumbnailimage6.png.webp"                   "logo.png.webp"

echo "Done."
