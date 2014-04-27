uniform vec2 res;
uniform float t;
uniform float xpos;
uniform float xacc;
vec3 o;
 float l;
void main ()
{
  int i_1;
   float ml_2;
   float dt_3;
  float j_4;
   vec3 pp_5;
   vec3 dir_6;
  l = 0.0;
  vec3 tmpvar_7;
  tmpvar_7.y = 0.0;
  tmpvar_7.x = xpos;
  tmpvar_7.z = ((t * 150.0) + (t * t));
  o = tmpvar_7;
  vec2 tmpvar_8;
  tmpvar_8.y = 1.0;
  tmpvar_8.x = (res.y / res.x);
   vec3 tmpvar_9;
  tmpvar_9.z = 1.0;
  tmpvar_9.xy = (((
    (gl_FragCoord.xy / res)
   * 2.0) - 1.0) / tmpvar_8);
  dir_6.y = tmpvar_9.y;
  float t_10;
  t_10 = -((xacc * 0.04));
  float tmpvar_11;
  tmpvar_11 = cos(t_10);
  float tmpvar_12;
  tmpvar_12 = sin(t_10);
  mat2 tmpvar_13;
  tmpvar_13[0].x = tmpvar_11;
  tmpvar_13[0].y = -(tmpvar_12);
  tmpvar_13[1].x = tmpvar_12;
  tmpvar_13[1].y = tmpvar_11;
   vec2 tmpvar_14;
  tmpvar_14 = (tmpvar_9.xz * tmpvar_13);
  dir_6.xz = tmpvar_14;
   float tmpvar_15;
  if ((abs(tmpvar_9.y) > (1e-08 * abs(tmpvar_14.x)))) {
     float tmpvar_16;
    tmpvar_16 = (tmpvar_14.x / tmpvar_9.y);
    tmpvar_15 = (tmpvar_16 * inversesqrt((
      (tmpvar_16 * tmpvar_16)
     + 1.0)));
    tmpvar_15 = (sign(tmpvar_15) * (1.5708 - (
      sqrt((1.0 - abs(tmpvar_15)))
     * 
      (1.5708 + (abs(tmpvar_15) * (-0.214602 + (
        abs(tmpvar_15)
       * 
        (0.0865667 + (abs(tmpvar_15) * -0.0310296))
      ))))
    )));
    if ((tmpvar_9.y < 0.0)) {
      if ((tmpvar_14.x >= 0.0)) {
        tmpvar_15 += 3.14159;
      } else {
        tmpvar_15 = (tmpvar_15 - 3.14159);
      };
    };
  } else {
    tmpvar_15 = (sign(tmpvar_14.x) * 1.5708);
  };
   vec2 tmpvar_17;
  tmpvar_17.x = tmpvar_15;
  tmpvar_17.y = sqrt(((tmpvar_14.x * tmpvar_14.x) + (tmpvar_9.y * tmpvar_9.y)));
   vec2 tmpvar_18;
  tmpvar_18.x = (sin(tmpvar_15) * tmpvar_17.y);
  tmpvar_18.y = (cos(tmpvar_15) * tmpvar_17.y);
  float t_19;
  t_19 = (xacc * 0.02);
  float tmpvar_20;
  tmpvar_20 = cos(t_19);
  float tmpvar_21;
  tmpvar_21 = sin(t_19);
  mat2 tmpvar_22;
  tmpvar_22[0].x = tmpvar_20;
  tmpvar_22[0].y = -(tmpvar_21);
  tmpvar_22[1].x = tmpvar_21;
  tmpvar_22[1].y = tmpvar_20;
  dir_6.xy = (tmpvar_18.yx * tmpvar_22).yx;
   vec3 tmpvar_23;
  tmpvar_23 = normalize(dir_6);
  dir_6 = tmpvar_23;
  vec2 v_24;
  v_24 = (tmpvar_7.zx * 0.001);
  vec3 g_25;
  vec4 x12_26;
  vec2 tmpvar_27;
  tmpvar_27 = floor((v_24 + dot (v_24, vec2(0.366025, 0.366025))));
  vec2 tmpvar_28;
  tmpvar_28 = ((v_24 - tmpvar_27) + dot (tmpvar_27, vec2(0.211325, 0.211325)));
  vec2 tmpvar_29;
  if ((tmpvar_28.x > tmpvar_28.y)) {
    tmpvar_29 = vec2(1.0, 0.0);
  } else {
    tmpvar_29 = vec2(0.0, 1.0);
  };
  vec4 tmpvar_30;
  tmpvar_30 = (tmpvar_28.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
  x12_26.zw = tmpvar_30.zw;
  x12_26.xy = (tmpvar_30.xy - tmpvar_29);
  vec2 tmpvar_31;
  tmpvar_31 = (tmpvar_27 - (floor(
    (tmpvar_27 * 0.00346021)
  ) * 289.0));
  vec3 tmpvar_32;
  tmpvar_32.xz = vec2(0.0, 1.0);
  tmpvar_32.y = tmpvar_29.y;
  vec3 x_33;
  x_33 = (tmpvar_31.y + tmpvar_32);
  vec3 x_34;
  x_34 = (((x_33 * 34.0) + 1.0) * x_33);
  vec3 tmpvar_35;
  tmpvar_35.xz = vec2(0.0, 1.0);
  tmpvar_35.y = tmpvar_29.x;
  vec3 x_36;
  x_36 = (((x_34 - 
    (floor((x_34 * 0.00346021)) * 289.0)
  ) + tmpvar_31.x) + tmpvar_35);
  vec3 x_37;
  x_37 = (((x_36 * 34.0) + 1.0) * x_36);
  vec3 tmpvar_38;
  tmpvar_38.x = dot (tmpvar_28, tmpvar_28);
  tmpvar_38.y = dot (x12_26.xy, x12_26.xy);
  tmpvar_38.z = dot (tmpvar_30.zw, tmpvar_30.zw);
  vec3 tmpvar_39;
  tmpvar_39 = max ((0.5 - tmpvar_38), 0.0);
  vec3 tmpvar_40;
  tmpvar_40 = (tmpvar_39 * tmpvar_39);
  vec3 tmpvar_41;
  tmpvar_41 = ((2.0 * fract(
    ((x_37 - (floor(
      (x_37 * 0.00346021)
    ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
  )) - 1.0);
  vec3 tmpvar_42;
  tmpvar_42 = (abs(tmpvar_41) - 0.5);
  vec3 tmpvar_43;
  tmpvar_43 = (tmpvar_41 - floor((tmpvar_41 + 0.5)));
  g_25.x = ((tmpvar_43.x * tmpvar_28.x) + (tmpvar_42.x * tmpvar_28.y));
  g_25.yz = ((tmpvar_43.yz * x12_26.xz) + (tmpvar_42.yz * x12_26.yw));
  o.y = (6.5 - (3900.0 * dot (
    ((tmpvar_40 * tmpvar_40) * (1.79284 - (0.853735 * (
      (tmpvar_43 * tmpvar_43)
     + 
      (tmpvar_42 * tmpvar_42)
    ))))
  , g_25)));
  pp_5 = vec3(0.0, 0.0, 0.0);
  j_4 = 0.0;
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  dt_3 = 1.0;
  ml_2 = 0.0;
  i_1 = 0;
  while(true) {
    if ((i_1 >= 50)) {
      break;
    };
    if (((dt_3 < (
      (0.025 + (ml_2 * 10.0))
     + 
      (j_4 * 0.01)
    )) || (l > 700.0))) {
      i_1++;
      continue;
    };
    ml_2 = clamp ((l / 700.0), 0.0, 1.0);
    j_4 = float(i_1);
     vec3 tmpvar_44;
    tmpvar_44 = (o + (dir_6 * l));
    pp_5 = tmpvar_44;
     vec3 p_45;
    p_45 = tmpvar_44;
     float tmpvar_46;
    tmpvar_46 = max (0.0, sin((tmpvar_44.z * 0.001)));
     float tmpvar_47;
    tmpvar_47 = (1.0 - tmpvar_46);
     float tmpvar_48;
    tmpvar_48 = (tmpvar_44.z / (1000.0 + tmpvar_44.z));
     float tmpvar_49;
    tmpvar_49 = (1.0 - tmpvar_48);
     float tmpvar_50;
    tmpvar_50 = max (0.0, -(sin(
      (tmpvar_44.z * 0.0004)
    )));
     float tmpvar_51;
    tmpvar_51 = (1.0 - tmpvar_50);
     vec2 v_52;
    v_52 = (tmpvar_44.zx * 0.001);
     vec3 g_53;
     vec4 x12_54;
     vec2 tmpvar_55;
    tmpvar_55 = floor((v_52 + dot (v_52, vec2(0.366025, 0.366025))));
     vec2 tmpvar_56;
    tmpvar_56 = ((v_52 - tmpvar_55) + dot (tmpvar_55, vec2(0.211325, 0.211325)));
    vec2 tmpvar_57;
    if ((tmpvar_56.x > tmpvar_56.y)) {
      tmpvar_57 = vec2(1.0, 0.0);
    } else {
      tmpvar_57 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_58;
    tmpvar_58 = (tmpvar_56.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_54.zw = tmpvar_58.zw;
    x12_54.xy = (tmpvar_58.xy - tmpvar_57);
     vec2 tmpvar_59;
    tmpvar_59 = (tmpvar_55 - (floor(
      (tmpvar_55 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_60;
    tmpvar_60.xz = vec2(0.0, 1.0);
    tmpvar_60.y = tmpvar_57.y;
     vec3 x_61;
    x_61 = (tmpvar_59.y + tmpvar_60);
     vec3 x_62;
    x_62 = (((x_61 * 34.0) + 1.0) * x_61);
    vec3 tmpvar_63;
    tmpvar_63.xz = vec2(0.0, 1.0);
    tmpvar_63.y = tmpvar_57.x;
     vec3 x_64;
    x_64 = (((x_62 - 
      (floor((x_62 * 0.00346021)) * 289.0)
    ) + tmpvar_59.x) + tmpvar_63);
     vec3 x_65;
    x_65 = (((x_64 * 34.0) + 1.0) * x_64);
     vec3 tmpvar_66;
    tmpvar_66.x = dot (tmpvar_56, tmpvar_56);
    tmpvar_66.y = dot (x12_54.xy, x12_54.xy);
    tmpvar_66.z = dot (tmpvar_58.zw, tmpvar_58.zw);
     vec3 tmpvar_67;
    tmpvar_67 = max ((0.5 - tmpvar_66), 0.0);
     vec3 tmpvar_68;
    tmpvar_68 = (tmpvar_67 * tmpvar_67);
     vec3 tmpvar_69;
    tmpvar_69 = ((2.0 * fract(
      ((x_65 - (floor(
        (x_65 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_70;
    tmpvar_70 = (abs(tmpvar_69) - 0.5);
     vec3 tmpvar_71;
    tmpvar_71 = (tmpvar_69 - floor((tmpvar_69 + 0.5)));
    g_53.x = ((tmpvar_71.x * tmpvar_56.x) + (tmpvar_70.x * tmpvar_56.y));
    g_53.yz = ((tmpvar_71.yz * x12_54.xz) + (tmpvar_70.yz * x12_54.yw));
     float tmpvar_72;
    tmpvar_72 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_73;
    a_73 = ((tmpvar_44.z * 0.1) + sin((tmpvar_44.x * 0.01)));
     float a_74;
    a_74 = (floor(a_73) - 1.0);
     float tmpvar_75;
    tmpvar_75 = floor(a_73);
     float a_76;
    a_76 = ((tmpvar_44.z * 0.3) + sin((tmpvar_44.x * 0.01)));
     float a_77;
    a_77 = (floor(a_76) - 1.0);
     float tmpvar_78;
    tmpvar_78 = floor(a_76);
     float tmpvar_79;
    tmpvar_79 = ((tmpvar_44.y + (3900.0 * 
      dot (((tmpvar_68 * tmpvar_68) * (1.79284 - (0.853735 * 
        ((tmpvar_71 * tmpvar_71) + (tmpvar_70 * tmpvar_70))
      ))), g_53)
    )) + ((
      ((mix (fract(
        (float(mod (((a_74 * 90327.1) + 1230.0), ((sin(a_74) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_75 * 90327.1) + 1230.0), ((sin(tmpvar_75) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_73)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_72)
     + 
      ((mix (fract(
        (float(mod (((a_77 * 90327.1) + 1230.0), ((sin(a_77) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_78 * 90327.1) + 1230.0), ((sin(tmpvar_78) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_76)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_72)
    ) - 1.5));
     float tmpvar_80;
    tmpvar_80 = min (1e+08, (tmpvar_79 + (tmpvar_46 * 300.0)));
    p_45.y = (tmpvar_44.y + (tmpvar_79 - tmpvar_44.y));
     vec3 v_81;
    v_81 = (p_45 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_82;
    tmpvar_82 = floor((v_81 + dot (v_81, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_83;
    tmpvar_83 = ((v_81 - tmpvar_82) + dot (tmpvar_82, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_84;
    tmpvar_84.x = float((tmpvar_83.x >= tmpvar_83.y));
    tmpvar_84.y = float((tmpvar_83.y >= tmpvar_83.z));
    tmpvar_84.z = float((tmpvar_83.z >= tmpvar_83.x));
     vec3 tmpvar_85;
    tmpvar_85 = (1.0 - tmpvar_84);
     vec3 tmpvar_86;
    tmpvar_86 = min (tmpvar_84, tmpvar_85.zxy);
     vec3 tmpvar_87;
    tmpvar_87 = max (tmpvar_84, tmpvar_85.zxy);
     vec3 tmpvar_88;
    tmpvar_88 = ((tmpvar_83 - tmpvar_86) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_89;
    tmpvar_89 = ((tmpvar_83 - tmpvar_87) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_90;
    tmpvar_90 = (tmpvar_83 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_91;
    tmpvar_91 = (tmpvar_82 - (floor(
      (tmpvar_82 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_92;
    tmpvar_92.xw = vec2(0.0, 1.0);
    tmpvar_92.y = tmpvar_86.z;
    tmpvar_92.z = tmpvar_87.z;
     vec4 x_93;
    x_93 = (tmpvar_91.z + tmpvar_92);
     vec4 x_94;
    x_94 = (((x_93 * 34.0) + 1.0) * x_93);
     vec4 tmpvar_95;
    tmpvar_95.xw = vec2(0.0, 1.0);
    tmpvar_95.y = tmpvar_86.y;
    tmpvar_95.z = tmpvar_87.y;
     vec4 x_96;
    x_96 = (((x_94 - 
      (floor((x_94 * 0.00346021)) * 289.0)
    ) + tmpvar_91.y) + tmpvar_95);
     vec4 x_97;
    x_97 = (((x_96 * 34.0) + 1.0) * x_96);
     vec4 tmpvar_98;
    tmpvar_98.xw = vec2(0.0, 1.0);
    tmpvar_98.y = tmpvar_86.x;
    tmpvar_98.z = tmpvar_87.x;
     vec4 x_99;
    x_99 = (((x_97 - 
      (floor((x_97 * 0.00346021)) * 289.0)
    ) + tmpvar_91.x) + tmpvar_98);
     vec4 tmpvar_100;
     vec4 x_101;
    x_101 = (((x_99 * 34.0) + 1.0) * x_99);
    tmpvar_100 = (x_101 - (floor(
      (x_101 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_102;
    tmpvar_102 = (tmpvar_100 - (49.0 * floor(
      (0.0204082 * tmpvar_100)
    )));
     vec4 tmpvar_103;
    tmpvar_103 = floor((tmpvar_102 * 0.142857));
     vec4 tmpvar_104;
    tmpvar_104 = ((tmpvar_103 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_105;
    tmpvar_105 = ((floor(
      (tmpvar_102 - (7.0 * tmpvar_103))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_106;
    tmpvar_106 = ((1.0 - abs(tmpvar_104)) - abs(tmpvar_105));
     vec4 tmpvar_107;
    tmpvar_107.xy = tmpvar_104.xy;
    tmpvar_107.zw = tmpvar_105.xy;
     vec4 tmpvar_108;
    tmpvar_108.xy = tmpvar_104.zw;
    tmpvar_108.zw = tmpvar_105.zw;
     vec4 tmpvar_109;
    tmpvar_109 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_106)));
     vec4 tmpvar_110;
    tmpvar_110 = (tmpvar_107.xzyw + ((
      (floor(tmpvar_107) * 2.0)
     + 1.0).xzyw * tmpvar_109.xxyy));
     vec4 tmpvar_111;
    tmpvar_111 = (tmpvar_108.xzyw + ((
      (floor(tmpvar_108) * 2.0)
     + 1.0).xzyw * tmpvar_109.zzww));
     vec3 tmpvar_112;
    tmpvar_112.xy = tmpvar_110.xy;
    tmpvar_112.z = tmpvar_106.x;
     vec3 tmpvar_113;
    tmpvar_113.xy = tmpvar_110.zw;
    tmpvar_113.z = tmpvar_106.y;
     vec3 tmpvar_114;
    tmpvar_114.xy = tmpvar_111.xy;
    tmpvar_114.z = tmpvar_106.z;
     vec3 tmpvar_115;
    tmpvar_115.xy = tmpvar_111.zw;
    tmpvar_115.z = tmpvar_106.w;
     vec4 tmpvar_116;
    tmpvar_116.x = dot (tmpvar_112, tmpvar_112);
    tmpvar_116.y = dot (tmpvar_113, tmpvar_113);
    tmpvar_116.z = dot (tmpvar_114, tmpvar_114);
    tmpvar_116.w = dot (tmpvar_115, tmpvar_115);
     vec4 tmpvar_117;
    tmpvar_117 = (1.79284 - (0.853735 * tmpvar_116));
     vec4 tmpvar_118;
    tmpvar_118.x = dot (tmpvar_83, tmpvar_83);
    tmpvar_118.y = dot (tmpvar_88, tmpvar_88);
    tmpvar_118.z = dot (tmpvar_89, tmpvar_89);
    tmpvar_118.w = dot (tmpvar_90, tmpvar_90);
     vec4 tmpvar_119;
    tmpvar_119 = max ((0.6 - tmpvar_118), 0.0);
     vec4 tmpvar_120;
    tmpvar_120 = (tmpvar_119 * tmpvar_119);
     vec4 tmpvar_121;
    tmpvar_121.x = dot ((tmpvar_112 * tmpvar_117.x), tmpvar_83);
    tmpvar_121.y = dot ((tmpvar_113 * tmpvar_117.y), tmpvar_88);
    tmpvar_121.z = dot ((tmpvar_114 * tmpvar_117.z), tmpvar_89);
    tmpvar_121.w = dot ((tmpvar_115 * tmpvar_117.w), tmpvar_90);
     float b_122;
    b_122 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_120 * tmpvar_120), tmpvar_121)
      ) - (
        sqrt(dot (p_45.xy, p_45.xy))
       * 0.3)) + (tmpvar_46 * 100.0)) + 80.0)
     + 
      max ((150.0 - (tmpvar_44.z * 0.1)), 0.0)
    )) + (tmpvar_50 * 100.0));
     float tmpvar_123;
    tmpvar_123 = clamp ((0.5 + (
      (0.5 * (b_122 - tmpvar_80))
     / 1.01)), 0.0, 1.0);
    p_45.y = tmpvar_44.y;
    p_45.x = (tmpvar_44.x + ((
      sin((tmpvar_44.z * 0.005))
     * 50.0) * tmpvar_48));
     float t_124;
    t_124 = (floor((tmpvar_44.z / 50.0)) * 0.25);
     float tmpvar_125;
    tmpvar_125 = cos(t_124);
     float tmpvar_126;
    tmpvar_126 = sin(t_124);
     mat2 tmpvar_127;
    tmpvar_127[0].x = tmpvar_125;
    tmpvar_127[0].y = -(tmpvar_126);
    tmpvar_127[1].x = tmpvar_126;
    tmpvar_127[1].y = tmpvar_125;
     vec2 tmpvar_128;
    tmpvar_128 = (p_45.xy * tmpvar_127);
    p_45.z = ((float(mod (tmpvar_44.z, 50.0))) - 25.0);
    p_45.xy = (((vec2(mod (tmpvar_128, 
      (200.0 + (tmpvar_47 * 400.0))
    ))) - 100.0) - (tmpvar_47 * 200.0));
     float tmpvar_129;
    tmpvar_129 = min (min ((
      mix (b_122, tmpvar_80, tmpvar_123)
     - 
      ((1.01 * tmpvar_123) * (1.0 - tmpvar_123))
    ), (
      (sqrt(dot (p_45.xz, p_45.xz)) - ((10.0 - (tmpvar_47 * 16.0)) - (tmpvar_49 * 16.0)))
     + 
      (tmpvar_50 * 100.0)
    )), ((
      sqrt(dot (p_45.yz, p_45.yz))
     - 
      ((10.0 - (tmpvar_47 * 16.0)) - (tmpvar_49 * 16.0))
    ) + (tmpvar_50 * 100.0)));
     vec3 tmpvar_130;
    tmpvar_130 = (tmpvar_44 - o);
    p_45.yz = tmpvar_130.yz;
    p_45.x = (tmpvar_130.x + (sin(
      (tmpvar_44.z * 0.003)
    ) * 100.0));
     float t_131;
    t_131 = (sin((tmpvar_44.z * 0.005)) * 0.3);
     float tmpvar_132;
    tmpvar_132 = cos(t_131);
     float tmpvar_133;
    tmpvar_133 = sin(t_131);
     mat2 tmpvar_134;
    tmpvar_134[0].x = tmpvar_132;
    tmpvar_134[0].y = -(tmpvar_133);
    tmpvar_134[1].x = tmpvar_133;
    tmpvar_134[1].y = tmpvar_132;
    p_45.xz = (p_45.xz * tmpvar_134);
     vec3 tmpvar_135;
    tmpvar_135 = (p_45 + o);
    p_45.y = tmpvar_135.y;
    p_45.xz = ((vec2(mod (tmpvar_135.xz, 200.0))) - 100.0);
     float t_136;
    t_136 = (sin((p_45.z * 0.01)) * 0.3);
     float tmpvar_137;
    tmpvar_137 = cos(t_136);
     float tmpvar_138;
    tmpvar_138 = sin(t_136);
     mat2 tmpvar_139;
    tmpvar_139[0].x = tmpvar_137;
    tmpvar_139[0].y = -(tmpvar_138);
    tmpvar_139[1].x = tmpvar_138;
    tmpvar_139[1].y = tmpvar_137;
    p_45.yz = (p_45.zy * tmpvar_139).yx;
     vec3 tmpvar_140;
    tmpvar_140.y = 500.0;
    tmpvar_140.x = (30.0 - (tmpvar_51 * 100.0));
    tmpvar_140.z = (10.0 - (tmpvar_51 * 100.0));
     vec3 tmpvar_141;
    tmpvar_141 = (abs(p_45) - tmpvar_140);
     vec3 tmpvar_142;
    tmpvar_142 = max (tmpvar_141, 0.0);
     float tmpvar_143;
    tmpvar_143 = min (tmpvar_129, ((tmpvar_51 * 100.0) + (
      min (max (tmpvar_141.x, max (tmpvar_141.y, tmpvar_141.z)), 0.0)
     + 
      sqrt(dot (tmpvar_142, tmpvar_142))
    )));
     vec3 poo_144;
     vec3 po_145;
    vec3 oo_146;
    vec3 tmpvar_147;
    tmpvar_147.y = 7.3;
    tmpvar_147.x = xpos;
    tmpvar_147.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_146 = tmpvar_147;
    vec2 v_148;
    v_148 = (tmpvar_147.zx * 0.001);
    vec3 g_149;
    vec4 x12_150;
    vec2 tmpvar_151;
    tmpvar_151 = floor((v_148 + dot (v_148, vec2(0.366025, 0.366025))));
    vec2 tmpvar_152;
    tmpvar_152 = ((v_148 - tmpvar_151) + dot (tmpvar_151, vec2(0.211325, 0.211325)));
    vec2 tmpvar_153;
    if ((tmpvar_152.x > tmpvar_152.y)) {
      tmpvar_153 = vec2(1.0, 0.0);
    } else {
      tmpvar_153 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_154;
    tmpvar_154 = (tmpvar_152.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_150.zw = tmpvar_154.zw;
    x12_150.xy = (tmpvar_154.xy - tmpvar_153);
    vec2 tmpvar_155;
    tmpvar_155 = (tmpvar_151 - (floor(
      (tmpvar_151 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_156;
    tmpvar_156.xz = vec2(0.0, 1.0);
    tmpvar_156.y = tmpvar_153.y;
    vec3 x_157;
    x_157 = (tmpvar_155.y + tmpvar_156);
    vec3 x_158;
    x_158 = (((x_157 * 34.0) + 1.0) * x_157);
    vec3 tmpvar_159;
    tmpvar_159.xz = vec2(0.0, 1.0);
    tmpvar_159.y = tmpvar_153.x;
    vec3 x_160;
    x_160 = (((x_158 - 
      (floor((x_158 * 0.00346021)) * 289.0)
    ) + tmpvar_155.x) + tmpvar_159);
    vec3 x_161;
    x_161 = (((x_160 * 34.0) + 1.0) * x_160);
    vec3 tmpvar_162;
    tmpvar_162.x = dot (tmpvar_152, tmpvar_152);
    tmpvar_162.y = dot (x12_150.xy, x12_150.xy);
    tmpvar_162.z = dot (tmpvar_154.zw, tmpvar_154.zw);
    vec3 tmpvar_163;
    tmpvar_163 = max ((0.5 - tmpvar_162), 0.0);
    vec3 tmpvar_164;
    tmpvar_164 = (tmpvar_163 * tmpvar_163);
    vec3 tmpvar_165;
    tmpvar_165 = ((2.0 * fract(
      ((x_161 - (floor(
        (x_161 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_166;
    tmpvar_166 = (abs(tmpvar_165) - 0.5);
    vec3 tmpvar_167;
    tmpvar_167 = (tmpvar_165 - floor((tmpvar_165 + 0.5)));
    g_149.x = ((tmpvar_167.x * tmpvar_152.x) + (tmpvar_166.x * tmpvar_152.y));
    g_149.yz = ((tmpvar_167.yz * x12_150.xz) + (tmpvar_166.yz * x12_150.yw));
    oo_146.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_164 * tmpvar_164) * (1.79284 - 
        (0.853735 * ((tmpvar_167 * tmpvar_167) + (tmpvar_166 * tmpvar_166)))
      )), g_149))
    ) - 5.5));
     vec3 tmpvar_168;
    tmpvar_168 = (tmpvar_44 - oo_146);
    po_145.x = tmpvar_168.x;
    mat2 tmpvar_169;
    tmpvar_169[0].x = 0.995004;
    tmpvar_169[0].y = -0.0998334;
    tmpvar_169[1].x = 0.0998334;
    tmpvar_169[1].y = 0.995004;
    po_145.yz = (tmpvar_168.zy * tmpvar_169).yx;
    float t_170;
    t_170 = (xacc * 0.01);
    float tmpvar_171;
    tmpvar_171 = cos(t_170);
    float tmpvar_172;
    tmpvar_172 = sin(t_170);
    mat2 tmpvar_173;
    tmpvar_173[0].x = tmpvar_171;
    tmpvar_173[0].y = -(tmpvar_172);
    tmpvar_173[1].x = tmpvar_172;
    tmpvar_173[1].y = tmpvar_171;
    po_145.xz = (po_145.xz * tmpvar_173);
    float t_174;
    t_174 = (xacc * -0.1);
    float tmpvar_175;
    tmpvar_175 = cos(t_174);
    float tmpvar_176;
    tmpvar_176 = sin(t_174);
    mat2 tmpvar_177;
    tmpvar_177[0].x = tmpvar_175;
    tmpvar_177[0].y = -(tmpvar_176);
    tmpvar_177[1].x = tmpvar_176;
    tmpvar_177[1].y = tmpvar_175;
     vec2 tmpvar_178;
    tmpvar_178 = (po_145.yx * tmpvar_177);
    po_145.xy = tmpvar_178.yx;
    poo_144 = po_145;
     vec3 tmpvar_179;
    tmpvar_179 = (po_145 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_180;
    tmpvar_180[0].x = -0.955336;
    tmpvar_180[0].y = -0.295523;
    tmpvar_180[1].x = 0.295523;
    tmpvar_180[1].y = -0.955336;
     vec2 tmpvar_181;
    tmpvar_181 = (tmpvar_178 * tmpvar_180);
    po_145.xy = tmpvar_181.yx;
     vec3 tmpvar_182;
    tmpvar_182 = (abs(po_145) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_183;
    tmpvar_183 = max (tmpvar_182, 0.0);
    mat2 tmpvar_184;
    tmpvar_184[0].x = -0.825337;
    tmpvar_184[0].y = 0.56464;
    tmpvar_184[1].x = -0.56464;
    tmpvar_184[1].y = -0.825337;
    po_145.xy = (tmpvar_181 * tmpvar_184).yx;
     vec3 tmpvar_185;
    tmpvar_185 = (abs(po_145) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_186;
    tmpvar_186 = max (tmpvar_185, 0.0);
    mat2 tmpvar_187;
    tmpvar_187[0].x = 0.540302;
    tmpvar_187[0].y = -0.841471;
    tmpvar_187[1].x = 0.841471;
    tmpvar_187[1].y = 0.540302;
     vec2 tmpvar_188;
    tmpvar_188 = (poo_144.xz * tmpvar_187);
    poo_144.xz = tmpvar_188;
     vec3 tmpvar_189;
    tmpvar_189 = (abs(poo_144) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_190;
    tmpvar_190 = max (tmpvar_189, 0.0);
    mat2 tmpvar_191;
    tmpvar_191[0].x = -0.416147;
    tmpvar_191[0].y = 0.909297;
    tmpvar_191[1].x = -0.909297;
    tmpvar_191[1].y = -0.416147;
    poo_144.xz = (tmpvar_188 * tmpvar_191);
     vec3 tmpvar_192;
    tmpvar_192 = (abs(poo_144) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_193;
    tmpvar_193 = max (tmpvar_192, 0.0);
     vec3 tmpvar_194;
    tmpvar_194 = (abs(tmpvar_179) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_195;
    tmpvar_195 = max (tmpvar_194, 0.0);
     float tmpvar_196;
    tmpvar_196 = min (tmpvar_143, (min (
      max (max ((min (
        max (tmpvar_192.x, max (tmpvar_192.y, tmpvar_192.z))
      , 0.0) + sqrt(
        dot (tmpvar_193, tmpvar_193)
      )), (min (
        max (tmpvar_189.x, max (tmpvar_189.y, tmpvar_189.z))
      , 0.0) + sqrt(
        dot (tmpvar_190, tmpvar_190)
      ))), min ((min (
        max (tmpvar_182.x, max (tmpvar_182.y, tmpvar_182.z))
      , 0.0) + sqrt(
        dot (tmpvar_183, tmpvar_183)
      )), (min (
        max (tmpvar_185.x, max (tmpvar_185.y, tmpvar_185.z))
      , 0.0) + sqrt(
        dot (tmpvar_186, tmpvar_186)
      ))))
    , 
      (min (max (tmpvar_194.x, max (tmpvar_194.y, tmpvar_194.z)), 0.0) + sqrt(dot (tmpvar_195, tmpvar_195)))
    ) + 0.3));
    dt_3 = tmpvar_196;
    l = (l + tmpvar_196);
    i_1++;
  };
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  if ((dt_3 < ((0.025 + 
    (ml_2 * 10.0)
  ) + (j_4 * 0.01)))) {
     vec3 pp_197;
    pp_197 = (pp_5 + vec3(1.0, 0.0, 0.0));
     vec3 p_198;
    p_198 = pp_197;
     float tmpvar_199;
    tmpvar_199 = max (0.0, sin((pp_197.z * 0.001)));
     float tmpvar_200;
    tmpvar_200 = (1.0 - tmpvar_199);
     float tmpvar_201;
    tmpvar_201 = (pp_197.z / (1000.0 + pp_197.z));
     float tmpvar_202;
    tmpvar_202 = (1.0 - tmpvar_201);
     float tmpvar_203;
    tmpvar_203 = max (0.0, -(sin(
      (pp_197.z * 0.0004)
    )));
     float tmpvar_204;
    tmpvar_204 = (1.0 - tmpvar_203);
     vec2 v_205;
    v_205 = (pp_197.zx * 0.001);
     vec3 g_206;
     vec4 x12_207;
     vec2 tmpvar_208;
    tmpvar_208 = floor((v_205 + dot (v_205, vec2(0.366025, 0.366025))));
     vec2 tmpvar_209;
    tmpvar_209 = ((v_205 - tmpvar_208) + dot (tmpvar_208, vec2(0.211325, 0.211325)));
    vec2 tmpvar_210;
    if ((tmpvar_209.x > tmpvar_209.y)) {
      tmpvar_210 = vec2(1.0, 0.0);
    } else {
      tmpvar_210 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_211;
    tmpvar_211 = (tmpvar_209.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_207.zw = tmpvar_211.zw;
    x12_207.xy = (tmpvar_211.xy - tmpvar_210);
     vec2 tmpvar_212;
    tmpvar_212 = (tmpvar_208 - (floor(
      (tmpvar_208 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_213;
    tmpvar_213.xz = vec2(0.0, 1.0);
    tmpvar_213.y = tmpvar_210.y;
     vec3 x_214;
    x_214 = (tmpvar_212.y + tmpvar_213);
     vec3 x_215;
    x_215 = (((x_214 * 34.0) + 1.0) * x_214);
    vec3 tmpvar_216;
    tmpvar_216.xz = vec2(0.0, 1.0);
    tmpvar_216.y = tmpvar_210.x;
     vec3 x_217;
    x_217 = (((x_215 - 
      (floor((x_215 * 0.00346021)) * 289.0)
    ) + tmpvar_212.x) + tmpvar_216);
     vec3 x_218;
    x_218 = (((x_217 * 34.0) + 1.0) * x_217);
     vec3 tmpvar_219;
    tmpvar_219.x = dot (tmpvar_209, tmpvar_209);
    tmpvar_219.y = dot (x12_207.xy, x12_207.xy);
    tmpvar_219.z = dot (tmpvar_211.zw, tmpvar_211.zw);
     vec3 tmpvar_220;
    tmpvar_220 = max ((0.5 - tmpvar_219), 0.0);
     vec3 tmpvar_221;
    tmpvar_221 = (tmpvar_220 * tmpvar_220);
     vec3 tmpvar_222;
    tmpvar_222 = ((2.0 * fract(
      ((x_218 - (floor(
        (x_218 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_223;
    tmpvar_223 = (abs(tmpvar_222) - 0.5);
     vec3 tmpvar_224;
    tmpvar_224 = (tmpvar_222 - floor((tmpvar_222 + 0.5)));
    g_206.x = ((tmpvar_224.x * tmpvar_209.x) + (tmpvar_223.x * tmpvar_209.y));
    g_206.yz = ((tmpvar_224.yz * x12_207.xz) + (tmpvar_223.yz * x12_207.yw));
     float tmpvar_225;
    tmpvar_225 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_226;
    a_226 = ((pp_197.z * 0.1) + sin((pp_197.x * 0.01)));
     float a_227;
    a_227 = (floor(a_226) - 1.0);
     float tmpvar_228;
    tmpvar_228 = floor(a_226);
     float a_229;
    a_229 = ((pp_197.z * 0.3) + sin((pp_197.x * 0.01)));
     float a_230;
    a_230 = (floor(a_229) - 1.0);
     float tmpvar_231;
    tmpvar_231 = floor(a_229);
     float tmpvar_232;
    tmpvar_232 = ((pp_197.y + (3900.0 * 
      dot (((tmpvar_221 * tmpvar_221) * (1.79284 - (0.853735 * 
        ((tmpvar_224 * tmpvar_224) + (tmpvar_223 * tmpvar_223))
      ))), g_206)
    )) + ((
      ((mix (fract(
        (float(mod (((a_227 * 90327.1) + 1230.0), ((sin(a_227) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_228 * 90327.1) + 1230.0), ((sin(tmpvar_228) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_226)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_225)
     + 
      ((mix (fract(
        (float(mod (((a_230 * 90327.1) + 1230.0), ((sin(a_230) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_231 * 90327.1) + 1230.0), ((sin(tmpvar_231) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_229)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_225)
    ) - 1.5));
     float tmpvar_233;
    tmpvar_233 = min (1e+08, (tmpvar_232 + (tmpvar_199 * 300.0)));
    p_198.y = (pp_197.y + (tmpvar_232 - pp_197.y));
     vec3 v_234;
    v_234 = (p_198 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_235;
    tmpvar_235 = floor((v_234 + dot (v_234, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_236;
    tmpvar_236 = ((v_234 - tmpvar_235) + dot (tmpvar_235, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_237;
    tmpvar_237.x = float((tmpvar_236.x >= tmpvar_236.y));
    tmpvar_237.y = float((tmpvar_236.y >= tmpvar_236.z));
    tmpvar_237.z = float((tmpvar_236.z >= tmpvar_236.x));
     vec3 tmpvar_238;
    tmpvar_238 = (1.0 - tmpvar_237);
     vec3 tmpvar_239;
    tmpvar_239 = min (tmpvar_237, tmpvar_238.zxy);
     vec3 tmpvar_240;
    tmpvar_240 = max (tmpvar_237, tmpvar_238.zxy);
     vec3 tmpvar_241;
    tmpvar_241 = ((tmpvar_236 - tmpvar_239) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_242;
    tmpvar_242 = ((tmpvar_236 - tmpvar_240) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_243;
    tmpvar_243 = (tmpvar_236 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_244;
    tmpvar_244 = (tmpvar_235 - (floor(
      (tmpvar_235 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_245;
    tmpvar_245.xw = vec2(0.0, 1.0);
    tmpvar_245.y = tmpvar_239.z;
    tmpvar_245.z = tmpvar_240.z;
     vec4 x_246;
    x_246 = (tmpvar_244.z + tmpvar_245);
     vec4 x_247;
    x_247 = (((x_246 * 34.0) + 1.0) * x_246);
     vec4 tmpvar_248;
    tmpvar_248.xw = vec2(0.0, 1.0);
    tmpvar_248.y = tmpvar_239.y;
    tmpvar_248.z = tmpvar_240.y;
     vec4 x_249;
    x_249 = (((x_247 - 
      (floor((x_247 * 0.00346021)) * 289.0)
    ) + tmpvar_244.y) + tmpvar_248);
     vec4 x_250;
    x_250 = (((x_249 * 34.0) + 1.0) * x_249);
     vec4 tmpvar_251;
    tmpvar_251.xw = vec2(0.0, 1.0);
    tmpvar_251.y = tmpvar_239.x;
    tmpvar_251.z = tmpvar_240.x;
     vec4 x_252;
    x_252 = (((x_250 - 
      (floor((x_250 * 0.00346021)) * 289.0)
    ) + tmpvar_244.x) + tmpvar_251);
     vec4 tmpvar_253;
     vec4 x_254;
    x_254 = (((x_252 * 34.0) + 1.0) * x_252);
    tmpvar_253 = (x_254 - (floor(
      (x_254 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_255;
    tmpvar_255 = (tmpvar_253 - (49.0 * floor(
      (0.0204082 * tmpvar_253)
    )));
     vec4 tmpvar_256;
    tmpvar_256 = floor((tmpvar_255 * 0.142857));
     vec4 tmpvar_257;
    tmpvar_257 = ((tmpvar_256 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_258;
    tmpvar_258 = ((floor(
      (tmpvar_255 - (7.0 * tmpvar_256))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_259;
    tmpvar_259 = ((1.0 - abs(tmpvar_257)) - abs(tmpvar_258));
     vec4 tmpvar_260;
    tmpvar_260.xy = tmpvar_257.xy;
    tmpvar_260.zw = tmpvar_258.xy;
     vec4 tmpvar_261;
    tmpvar_261.xy = tmpvar_257.zw;
    tmpvar_261.zw = tmpvar_258.zw;
     vec4 tmpvar_262;
    tmpvar_262 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_259)));
     vec4 tmpvar_263;
    tmpvar_263 = (tmpvar_260.xzyw + ((
      (floor(tmpvar_260) * 2.0)
     + 1.0).xzyw * tmpvar_262.xxyy));
     vec4 tmpvar_264;
    tmpvar_264 = (tmpvar_261.xzyw + ((
      (floor(tmpvar_261) * 2.0)
     + 1.0).xzyw * tmpvar_262.zzww));
     vec3 tmpvar_265;
    tmpvar_265.xy = tmpvar_263.xy;
    tmpvar_265.z = tmpvar_259.x;
     vec3 tmpvar_266;
    tmpvar_266.xy = tmpvar_263.zw;
    tmpvar_266.z = tmpvar_259.y;
     vec3 tmpvar_267;
    tmpvar_267.xy = tmpvar_264.xy;
    tmpvar_267.z = tmpvar_259.z;
     vec3 tmpvar_268;
    tmpvar_268.xy = tmpvar_264.zw;
    tmpvar_268.z = tmpvar_259.w;
     vec4 tmpvar_269;
    tmpvar_269.x = dot (tmpvar_265, tmpvar_265);
    tmpvar_269.y = dot (tmpvar_266, tmpvar_266);
    tmpvar_269.z = dot (tmpvar_267, tmpvar_267);
    tmpvar_269.w = dot (tmpvar_268, tmpvar_268);
     vec4 tmpvar_270;
    tmpvar_270 = (1.79284 - (0.853735 * tmpvar_269));
     vec4 tmpvar_271;
    tmpvar_271.x = dot (tmpvar_236, tmpvar_236);
    tmpvar_271.y = dot (tmpvar_241, tmpvar_241);
    tmpvar_271.z = dot (tmpvar_242, tmpvar_242);
    tmpvar_271.w = dot (tmpvar_243, tmpvar_243);
     vec4 tmpvar_272;
    tmpvar_272 = max ((0.6 - tmpvar_271), 0.0);
     vec4 tmpvar_273;
    tmpvar_273 = (tmpvar_272 * tmpvar_272);
     vec4 tmpvar_274;
    tmpvar_274.x = dot ((tmpvar_265 * tmpvar_270.x), tmpvar_236);
    tmpvar_274.y = dot ((tmpvar_266 * tmpvar_270.y), tmpvar_241);
    tmpvar_274.z = dot ((tmpvar_267 * tmpvar_270.z), tmpvar_242);
    tmpvar_274.w = dot ((tmpvar_268 * tmpvar_270.w), tmpvar_243);
     float b_275;
    b_275 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_273 * tmpvar_273), tmpvar_274)
      ) - (
        sqrt(dot (p_198.xy, p_198.xy))
       * 0.3)) + (tmpvar_199 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_197.z * 0.1)), 0.0)
    )) + (tmpvar_203 * 100.0));
     float tmpvar_276;
    tmpvar_276 = clamp ((0.5 + (
      (0.5 * (b_275 - tmpvar_233))
     / 1.01)), 0.0, 1.0);
    p_198.y = pp_197.y;
    p_198.x = (pp_197.x + ((
      sin((pp_197.z * 0.005))
     * 50.0) * tmpvar_201));
     float t_277;
    t_277 = (floor((pp_197.z / 50.0)) * 0.25);
     float tmpvar_278;
    tmpvar_278 = cos(t_277);
     float tmpvar_279;
    tmpvar_279 = sin(t_277);
     mat2 tmpvar_280;
    tmpvar_280[0].x = tmpvar_278;
    tmpvar_280[0].y = -(tmpvar_279);
    tmpvar_280[1].x = tmpvar_279;
    tmpvar_280[1].y = tmpvar_278;
     vec2 tmpvar_281;
    tmpvar_281 = (p_198.xy * tmpvar_280);
    p_198.z = ((float(mod (pp_197.z, 50.0))) - 25.0);
    p_198.xy = (((vec2(mod (tmpvar_281, 
      (200.0 + (tmpvar_200 * 400.0))
    ))) - 100.0) - (tmpvar_200 * 200.0));
     float tmpvar_282;
    tmpvar_282 = min (min ((
      mix (b_275, tmpvar_233, tmpvar_276)
     - 
      ((1.01 * tmpvar_276) * (1.0 - tmpvar_276))
    ), (
      (sqrt(dot (p_198.xz, p_198.xz)) - ((10.0 - (tmpvar_200 * 16.0)) - (tmpvar_202 * 16.0)))
     + 
      (tmpvar_203 * 100.0)
    )), ((
      sqrt(dot (p_198.yz, p_198.yz))
     - 
      ((10.0 - (tmpvar_200 * 16.0)) - (tmpvar_202 * 16.0))
    ) + (tmpvar_203 * 100.0)));
     vec3 tmpvar_283;
    tmpvar_283 = (pp_197 - o);
    p_198.yz = tmpvar_283.yz;
    p_198.x = (tmpvar_283.x + (sin(
      (pp_197.z * 0.003)
    ) * 100.0));
     float t_284;
    t_284 = (sin((pp_197.z * 0.005)) * 0.3);
     float tmpvar_285;
    tmpvar_285 = cos(t_284);
     float tmpvar_286;
    tmpvar_286 = sin(t_284);
     mat2 tmpvar_287;
    tmpvar_287[0].x = tmpvar_285;
    tmpvar_287[0].y = -(tmpvar_286);
    tmpvar_287[1].x = tmpvar_286;
    tmpvar_287[1].y = tmpvar_285;
    p_198.xz = (p_198.xz * tmpvar_287);
     vec3 tmpvar_288;
    tmpvar_288 = (p_198 + o);
    p_198.y = tmpvar_288.y;
    p_198.xz = ((vec2(mod (tmpvar_288.xz, 200.0))) - 100.0);
     float t_289;
    t_289 = (sin((p_198.z * 0.01)) * 0.3);
     float tmpvar_290;
    tmpvar_290 = cos(t_289);
     float tmpvar_291;
    tmpvar_291 = sin(t_289);
     mat2 tmpvar_292;
    tmpvar_292[0].x = tmpvar_290;
    tmpvar_292[0].y = -(tmpvar_291);
    tmpvar_292[1].x = tmpvar_291;
    tmpvar_292[1].y = tmpvar_290;
    p_198.yz = (p_198.zy * tmpvar_292).yx;
     vec3 tmpvar_293;
    tmpvar_293.y = 500.0;
    tmpvar_293.x = (30.0 - (tmpvar_204 * 100.0));
    tmpvar_293.z = (10.0 - (tmpvar_204 * 100.0));
     vec3 tmpvar_294;
    tmpvar_294 = (abs(p_198) - tmpvar_293);
     vec3 tmpvar_295;
    tmpvar_295 = max (tmpvar_294, 0.0);
     float tmpvar_296;
    tmpvar_296 = min (tmpvar_282, ((tmpvar_204 * 100.0) + (
      min (max (tmpvar_294.x, max (tmpvar_294.y, tmpvar_294.z)), 0.0)
     + 
      sqrt(dot (tmpvar_295, tmpvar_295))
    )));
     vec3 poo_297;
     vec3 po_298;
    vec3 oo_299;
    vec3 tmpvar_300;
    tmpvar_300.y = 7.3;
    tmpvar_300.x = xpos;
    tmpvar_300.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_299 = tmpvar_300;
    vec2 v_301;
    v_301 = (tmpvar_300.zx * 0.001);
    vec3 g_302;
    vec4 x12_303;
    vec2 tmpvar_304;
    tmpvar_304 = floor((v_301 + dot (v_301, vec2(0.366025, 0.366025))));
    vec2 tmpvar_305;
    tmpvar_305 = ((v_301 - tmpvar_304) + dot (tmpvar_304, vec2(0.211325, 0.211325)));
    vec2 tmpvar_306;
    if ((tmpvar_305.x > tmpvar_305.y)) {
      tmpvar_306 = vec2(1.0, 0.0);
    } else {
      tmpvar_306 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_307;
    tmpvar_307 = (tmpvar_305.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_303.zw = tmpvar_307.zw;
    x12_303.xy = (tmpvar_307.xy - tmpvar_306);
    vec2 tmpvar_308;
    tmpvar_308 = (tmpvar_304 - (floor(
      (tmpvar_304 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_309;
    tmpvar_309.xz = vec2(0.0, 1.0);
    tmpvar_309.y = tmpvar_306.y;
    vec3 x_310;
    x_310 = (tmpvar_308.y + tmpvar_309);
    vec3 x_311;
    x_311 = (((x_310 * 34.0) + 1.0) * x_310);
    vec3 tmpvar_312;
    tmpvar_312.xz = vec2(0.0, 1.0);
    tmpvar_312.y = tmpvar_306.x;
    vec3 x_313;
    x_313 = (((x_311 - 
      (floor((x_311 * 0.00346021)) * 289.0)
    ) + tmpvar_308.x) + tmpvar_312);
    vec3 x_314;
    x_314 = (((x_313 * 34.0) + 1.0) * x_313);
    vec3 tmpvar_315;
    tmpvar_315.x = dot (tmpvar_305, tmpvar_305);
    tmpvar_315.y = dot (x12_303.xy, x12_303.xy);
    tmpvar_315.z = dot (tmpvar_307.zw, tmpvar_307.zw);
    vec3 tmpvar_316;
    tmpvar_316 = max ((0.5 - tmpvar_315), 0.0);
    vec3 tmpvar_317;
    tmpvar_317 = (tmpvar_316 * tmpvar_316);
    vec3 tmpvar_318;
    tmpvar_318 = ((2.0 * fract(
      ((x_314 - (floor(
        (x_314 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_319;
    tmpvar_319 = (abs(tmpvar_318) - 0.5);
    vec3 tmpvar_320;
    tmpvar_320 = (tmpvar_318 - floor((tmpvar_318 + 0.5)));
    g_302.x = ((tmpvar_320.x * tmpvar_305.x) + (tmpvar_319.x * tmpvar_305.y));
    g_302.yz = ((tmpvar_320.yz * x12_303.xz) + (tmpvar_319.yz * x12_303.yw));
    oo_299.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_317 * tmpvar_317) * (1.79284 - 
        (0.853735 * ((tmpvar_320 * tmpvar_320) + (tmpvar_319 * tmpvar_319)))
      )), g_302))
    ) - 5.5));
     vec3 tmpvar_321;
    tmpvar_321 = (pp_197 - oo_299);
    po_298.x = tmpvar_321.x;
    mat2 tmpvar_322;
    tmpvar_322[0].x = 0.995004;
    tmpvar_322[0].y = -0.0998334;
    tmpvar_322[1].x = 0.0998334;
    tmpvar_322[1].y = 0.995004;
    po_298.yz = (tmpvar_321.zy * tmpvar_322).yx;
    float t_323;
    t_323 = (xacc * 0.01);
    float tmpvar_324;
    tmpvar_324 = cos(t_323);
    float tmpvar_325;
    tmpvar_325 = sin(t_323);
    mat2 tmpvar_326;
    tmpvar_326[0].x = tmpvar_324;
    tmpvar_326[0].y = -(tmpvar_325);
    tmpvar_326[1].x = tmpvar_325;
    tmpvar_326[1].y = tmpvar_324;
    po_298.xz = (po_298.xz * tmpvar_326);
    float t_327;
    t_327 = (xacc * -0.1);
    float tmpvar_328;
    tmpvar_328 = cos(t_327);
    float tmpvar_329;
    tmpvar_329 = sin(t_327);
    mat2 tmpvar_330;
    tmpvar_330[0].x = tmpvar_328;
    tmpvar_330[0].y = -(tmpvar_329);
    tmpvar_330[1].x = tmpvar_329;
    tmpvar_330[1].y = tmpvar_328;
     vec2 tmpvar_331;
    tmpvar_331 = (po_298.yx * tmpvar_330);
    po_298.xy = tmpvar_331.yx;
    poo_297 = po_298;
     vec3 tmpvar_332;
    tmpvar_332 = (po_298 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_333;
    tmpvar_333[0].x = -0.955336;
    tmpvar_333[0].y = -0.295523;
    tmpvar_333[1].x = 0.295523;
    tmpvar_333[1].y = -0.955336;
     vec2 tmpvar_334;
    tmpvar_334 = (tmpvar_331 * tmpvar_333);
    po_298.xy = tmpvar_334.yx;
     vec3 tmpvar_335;
    tmpvar_335 = (abs(po_298) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_336;
    tmpvar_336 = max (tmpvar_335, 0.0);
    mat2 tmpvar_337;
    tmpvar_337[0].x = -0.825337;
    tmpvar_337[0].y = 0.56464;
    tmpvar_337[1].x = -0.56464;
    tmpvar_337[1].y = -0.825337;
    po_298.xy = (tmpvar_334 * tmpvar_337).yx;
     vec3 tmpvar_338;
    tmpvar_338 = (abs(po_298) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_339;
    tmpvar_339 = max (tmpvar_338, 0.0);
    mat2 tmpvar_340;
    tmpvar_340[0].x = 0.540302;
    tmpvar_340[0].y = -0.841471;
    tmpvar_340[1].x = 0.841471;
    tmpvar_340[1].y = 0.540302;
     vec2 tmpvar_341;
    tmpvar_341 = (poo_297.xz * tmpvar_340);
    poo_297.xz = tmpvar_341;
     vec3 tmpvar_342;
    tmpvar_342 = (abs(poo_297) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_343;
    tmpvar_343 = max (tmpvar_342, 0.0);
    mat2 tmpvar_344;
    tmpvar_344[0].x = -0.416147;
    tmpvar_344[0].y = 0.909297;
    tmpvar_344[1].x = -0.909297;
    tmpvar_344[1].y = -0.416147;
    poo_297.xz = (tmpvar_341 * tmpvar_344);
     vec3 tmpvar_345;
    tmpvar_345 = (abs(poo_297) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_346;
    tmpvar_346 = max (tmpvar_345, 0.0);
     vec3 tmpvar_347;
    tmpvar_347 = (abs(tmpvar_332) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_348;
    tmpvar_348 = max (tmpvar_347, 0.0);
     float tmpvar_349;
    tmpvar_349 = min (tmpvar_296, (min (
      max (max ((min (
        max (tmpvar_345.x, max (tmpvar_345.y, tmpvar_345.z))
      , 0.0) + sqrt(
        dot (tmpvar_346, tmpvar_346)
      )), (min (
        max (tmpvar_342.x, max (tmpvar_342.y, tmpvar_342.z))
      , 0.0) + sqrt(
        dot (tmpvar_343, tmpvar_343)
      ))), min ((min (
        max (tmpvar_335.x, max (tmpvar_335.y, tmpvar_335.z))
      , 0.0) + sqrt(
        dot (tmpvar_336, tmpvar_336)
      )), (min (
        max (tmpvar_338.x, max (tmpvar_338.y, tmpvar_338.z))
      , 0.0) + sqrt(
        dot (tmpvar_339, tmpvar_339)
      ))))
    , 
      (min (max (tmpvar_347.x, max (tmpvar_347.y, tmpvar_347.z)), 0.0) + sqrt(dot (tmpvar_348, tmpvar_348)))
    ) + 0.3));
     vec3 pp_350;
    pp_350 = (pp_5 - vec3(1.0, 0.0, 0.0));
     vec3 p_351;
    p_351 = pp_350;
     float tmpvar_352;
    tmpvar_352 = max (0.0, sin((pp_350.z * 0.001)));
     float tmpvar_353;
    tmpvar_353 = (1.0 - tmpvar_352);
     float tmpvar_354;
    tmpvar_354 = (pp_350.z / (1000.0 + pp_350.z));
     float tmpvar_355;
    tmpvar_355 = (1.0 - tmpvar_354);
     float tmpvar_356;
    tmpvar_356 = max (0.0, -(sin(
      (pp_350.z * 0.0004)
    )));
     float tmpvar_357;
    tmpvar_357 = (1.0 - tmpvar_356);
     vec2 v_358;
    v_358 = (pp_350.zx * 0.001);
     vec3 g_359;
     vec4 x12_360;
     vec2 tmpvar_361;
    tmpvar_361 = floor((v_358 + dot (v_358, vec2(0.366025, 0.366025))));
     vec2 tmpvar_362;
    tmpvar_362 = ((v_358 - tmpvar_361) + dot (tmpvar_361, vec2(0.211325, 0.211325)));
    vec2 tmpvar_363;
    if ((tmpvar_362.x > tmpvar_362.y)) {
      tmpvar_363 = vec2(1.0, 0.0);
    } else {
      tmpvar_363 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_364;
    tmpvar_364 = (tmpvar_362.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_360.zw = tmpvar_364.zw;
    x12_360.xy = (tmpvar_364.xy - tmpvar_363);
     vec2 tmpvar_365;
    tmpvar_365 = (tmpvar_361 - (floor(
      (tmpvar_361 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_366;
    tmpvar_366.xz = vec2(0.0, 1.0);
    tmpvar_366.y = tmpvar_363.y;
     vec3 x_367;
    x_367 = (tmpvar_365.y + tmpvar_366);
     vec3 x_368;
    x_368 = (((x_367 * 34.0) + 1.0) * x_367);
    vec3 tmpvar_369;
    tmpvar_369.xz = vec2(0.0, 1.0);
    tmpvar_369.y = tmpvar_363.x;
     vec3 x_370;
    x_370 = (((x_368 - 
      (floor((x_368 * 0.00346021)) * 289.0)
    ) + tmpvar_365.x) + tmpvar_369);
     vec3 x_371;
    x_371 = (((x_370 * 34.0) + 1.0) * x_370);
     vec3 tmpvar_372;
    tmpvar_372.x = dot (tmpvar_362, tmpvar_362);
    tmpvar_372.y = dot (x12_360.xy, x12_360.xy);
    tmpvar_372.z = dot (tmpvar_364.zw, tmpvar_364.zw);
     vec3 tmpvar_373;
    tmpvar_373 = max ((0.5 - tmpvar_372), 0.0);
     vec3 tmpvar_374;
    tmpvar_374 = (tmpvar_373 * tmpvar_373);
     vec3 tmpvar_375;
    tmpvar_375 = ((2.0 * fract(
      ((x_371 - (floor(
        (x_371 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_376;
    tmpvar_376 = (abs(tmpvar_375) - 0.5);
     vec3 tmpvar_377;
    tmpvar_377 = (tmpvar_375 - floor((tmpvar_375 + 0.5)));
    g_359.x = ((tmpvar_377.x * tmpvar_362.x) + (tmpvar_376.x * tmpvar_362.y));
    g_359.yz = ((tmpvar_377.yz * x12_360.xz) + (tmpvar_376.yz * x12_360.yw));
     float tmpvar_378;
    tmpvar_378 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_379;
    a_379 = ((pp_350.z * 0.1) + sin((pp_350.x * 0.01)));
     float a_380;
    a_380 = (floor(a_379) - 1.0);
     float tmpvar_381;
    tmpvar_381 = floor(a_379);
     float a_382;
    a_382 = ((pp_350.z * 0.3) + sin((pp_350.x * 0.01)));
     float a_383;
    a_383 = (floor(a_382) - 1.0);
     float tmpvar_384;
    tmpvar_384 = floor(a_382);
     float tmpvar_385;
    tmpvar_385 = ((pp_350.y + (3900.0 * 
      dot (((tmpvar_374 * tmpvar_374) * (1.79284 - (0.853735 * 
        ((tmpvar_377 * tmpvar_377) + (tmpvar_376 * tmpvar_376))
      ))), g_359)
    )) + ((
      ((mix (fract(
        (float(mod (((a_380 * 90327.1) + 1230.0), ((sin(a_380) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_381 * 90327.1) + 1230.0), ((sin(tmpvar_381) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_379)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_378)
     + 
      ((mix (fract(
        (float(mod (((a_383 * 90327.1) + 1230.0), ((sin(a_383) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_384 * 90327.1) + 1230.0), ((sin(tmpvar_384) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_382)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_378)
    ) - 1.5));
     float tmpvar_386;
    tmpvar_386 = min (1e+08, (tmpvar_385 + (tmpvar_352 * 300.0)));
    p_351.y = (pp_350.y + (tmpvar_385 - pp_350.y));
     vec3 v_387;
    v_387 = (p_351 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_388;
    tmpvar_388 = floor((v_387 + dot (v_387, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_389;
    tmpvar_389 = ((v_387 - tmpvar_388) + dot (tmpvar_388, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_390;
    tmpvar_390.x = float((tmpvar_389.x >= tmpvar_389.y));
    tmpvar_390.y = float((tmpvar_389.y >= tmpvar_389.z));
    tmpvar_390.z = float((tmpvar_389.z >= tmpvar_389.x));
     vec3 tmpvar_391;
    tmpvar_391 = (1.0 - tmpvar_390);
     vec3 tmpvar_392;
    tmpvar_392 = min (tmpvar_390, tmpvar_391.zxy);
     vec3 tmpvar_393;
    tmpvar_393 = max (tmpvar_390, tmpvar_391.zxy);
     vec3 tmpvar_394;
    tmpvar_394 = ((tmpvar_389 - tmpvar_392) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_395;
    tmpvar_395 = ((tmpvar_389 - tmpvar_393) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_396;
    tmpvar_396 = (tmpvar_389 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_397;
    tmpvar_397 = (tmpvar_388 - (floor(
      (tmpvar_388 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_398;
    tmpvar_398.xw = vec2(0.0, 1.0);
    tmpvar_398.y = tmpvar_392.z;
    tmpvar_398.z = tmpvar_393.z;
     vec4 x_399;
    x_399 = (tmpvar_397.z + tmpvar_398);
     vec4 x_400;
    x_400 = (((x_399 * 34.0) + 1.0) * x_399);
     vec4 tmpvar_401;
    tmpvar_401.xw = vec2(0.0, 1.0);
    tmpvar_401.y = tmpvar_392.y;
    tmpvar_401.z = tmpvar_393.y;
     vec4 x_402;
    x_402 = (((x_400 - 
      (floor((x_400 * 0.00346021)) * 289.0)
    ) + tmpvar_397.y) + tmpvar_401);
     vec4 x_403;
    x_403 = (((x_402 * 34.0) + 1.0) * x_402);
     vec4 tmpvar_404;
    tmpvar_404.xw = vec2(0.0, 1.0);
    tmpvar_404.y = tmpvar_392.x;
    tmpvar_404.z = tmpvar_393.x;
     vec4 x_405;
    x_405 = (((x_403 - 
      (floor((x_403 * 0.00346021)) * 289.0)
    ) + tmpvar_397.x) + tmpvar_404);
     vec4 tmpvar_406;
     vec4 x_407;
    x_407 = (((x_405 * 34.0) + 1.0) * x_405);
    tmpvar_406 = (x_407 - (floor(
      (x_407 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_408;
    tmpvar_408 = (tmpvar_406 - (49.0 * floor(
      (0.0204082 * tmpvar_406)
    )));
     vec4 tmpvar_409;
    tmpvar_409 = floor((tmpvar_408 * 0.142857));
     vec4 tmpvar_410;
    tmpvar_410 = ((tmpvar_409 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_411;
    tmpvar_411 = ((floor(
      (tmpvar_408 - (7.0 * tmpvar_409))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_412;
    tmpvar_412 = ((1.0 - abs(tmpvar_410)) - abs(tmpvar_411));
     vec4 tmpvar_413;
    tmpvar_413.xy = tmpvar_410.xy;
    tmpvar_413.zw = tmpvar_411.xy;
     vec4 tmpvar_414;
    tmpvar_414.xy = tmpvar_410.zw;
    tmpvar_414.zw = tmpvar_411.zw;
     vec4 tmpvar_415;
    tmpvar_415 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_412)));
     vec4 tmpvar_416;
    tmpvar_416 = (tmpvar_413.xzyw + ((
      (floor(tmpvar_413) * 2.0)
     + 1.0).xzyw * tmpvar_415.xxyy));
     vec4 tmpvar_417;
    tmpvar_417 = (tmpvar_414.xzyw + ((
      (floor(tmpvar_414) * 2.0)
     + 1.0).xzyw * tmpvar_415.zzww));
     vec3 tmpvar_418;
    tmpvar_418.xy = tmpvar_416.xy;
    tmpvar_418.z = tmpvar_412.x;
     vec3 tmpvar_419;
    tmpvar_419.xy = tmpvar_416.zw;
    tmpvar_419.z = tmpvar_412.y;
     vec3 tmpvar_420;
    tmpvar_420.xy = tmpvar_417.xy;
    tmpvar_420.z = tmpvar_412.z;
     vec3 tmpvar_421;
    tmpvar_421.xy = tmpvar_417.zw;
    tmpvar_421.z = tmpvar_412.w;
     vec4 tmpvar_422;
    tmpvar_422.x = dot (tmpvar_418, tmpvar_418);
    tmpvar_422.y = dot (tmpvar_419, tmpvar_419);
    tmpvar_422.z = dot (tmpvar_420, tmpvar_420);
    tmpvar_422.w = dot (tmpvar_421, tmpvar_421);
     vec4 tmpvar_423;
    tmpvar_423 = (1.79284 - (0.853735 * tmpvar_422));
     vec4 tmpvar_424;
    tmpvar_424.x = dot (tmpvar_389, tmpvar_389);
    tmpvar_424.y = dot (tmpvar_394, tmpvar_394);
    tmpvar_424.z = dot (tmpvar_395, tmpvar_395);
    tmpvar_424.w = dot (tmpvar_396, tmpvar_396);
     vec4 tmpvar_425;
    tmpvar_425 = max ((0.6 - tmpvar_424), 0.0);
     vec4 tmpvar_426;
    tmpvar_426 = (tmpvar_425 * tmpvar_425);
     vec4 tmpvar_427;
    tmpvar_427.x = dot ((tmpvar_418 * tmpvar_423.x), tmpvar_389);
    tmpvar_427.y = dot ((tmpvar_419 * tmpvar_423.y), tmpvar_394);
    tmpvar_427.z = dot ((tmpvar_420 * tmpvar_423.z), tmpvar_395);
    tmpvar_427.w = dot ((tmpvar_421 * tmpvar_423.w), tmpvar_396);
     float b_428;
    b_428 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_426 * tmpvar_426), tmpvar_427)
      ) - (
        sqrt(dot (p_351.xy, p_351.xy))
       * 0.3)) + (tmpvar_352 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_350.z * 0.1)), 0.0)
    )) + (tmpvar_356 * 100.0));
     float tmpvar_429;
    tmpvar_429 = clamp ((0.5 + (
      (0.5 * (b_428 - tmpvar_386))
     / 1.01)), 0.0, 1.0);
    p_351.y = pp_350.y;
    p_351.x = (pp_350.x + ((
      sin((pp_350.z * 0.005))
     * 50.0) * tmpvar_354));
     float t_430;
    t_430 = (floor((pp_350.z / 50.0)) * 0.25);
     float tmpvar_431;
    tmpvar_431 = cos(t_430);
     float tmpvar_432;
    tmpvar_432 = sin(t_430);
     mat2 tmpvar_433;
    tmpvar_433[0].x = tmpvar_431;
    tmpvar_433[0].y = -(tmpvar_432);
    tmpvar_433[1].x = tmpvar_432;
    tmpvar_433[1].y = tmpvar_431;
     vec2 tmpvar_434;
    tmpvar_434 = (p_351.xy * tmpvar_433);
    p_351.z = ((float(mod (pp_350.z, 50.0))) - 25.0);
    p_351.xy = (((vec2(mod (tmpvar_434, 
      (200.0 + (tmpvar_353 * 400.0))
    ))) - 100.0) - (tmpvar_353 * 200.0));
     float tmpvar_435;
    tmpvar_435 = min (min ((
      mix (b_428, tmpvar_386, tmpvar_429)
     - 
      ((1.01 * tmpvar_429) * (1.0 - tmpvar_429))
    ), (
      (sqrt(dot (p_351.xz, p_351.xz)) - ((10.0 - (tmpvar_353 * 16.0)) - (tmpvar_355 * 16.0)))
     + 
      (tmpvar_356 * 100.0)
    )), ((
      sqrt(dot (p_351.yz, p_351.yz))
     - 
      ((10.0 - (tmpvar_353 * 16.0)) - (tmpvar_355 * 16.0))
    ) + (tmpvar_356 * 100.0)));
     vec3 tmpvar_436;
    tmpvar_436 = (pp_350 - o);
    p_351.yz = tmpvar_436.yz;
    p_351.x = (tmpvar_436.x + (sin(
      (pp_350.z * 0.003)
    ) * 100.0));
     float t_437;
    t_437 = (sin((pp_350.z * 0.005)) * 0.3);
     float tmpvar_438;
    tmpvar_438 = cos(t_437);
     float tmpvar_439;
    tmpvar_439 = sin(t_437);
     mat2 tmpvar_440;
    tmpvar_440[0].x = tmpvar_438;
    tmpvar_440[0].y = -(tmpvar_439);
    tmpvar_440[1].x = tmpvar_439;
    tmpvar_440[1].y = tmpvar_438;
    p_351.xz = (p_351.xz * tmpvar_440);
     vec3 tmpvar_441;
    tmpvar_441 = (p_351 + o);
    p_351.y = tmpvar_441.y;
    p_351.xz = ((vec2(mod (tmpvar_441.xz, 200.0))) - 100.0);
     float t_442;
    t_442 = (sin((p_351.z * 0.01)) * 0.3);
     float tmpvar_443;
    tmpvar_443 = cos(t_442);
     float tmpvar_444;
    tmpvar_444 = sin(t_442);
     mat2 tmpvar_445;
    tmpvar_445[0].x = tmpvar_443;
    tmpvar_445[0].y = -(tmpvar_444);
    tmpvar_445[1].x = tmpvar_444;
    tmpvar_445[1].y = tmpvar_443;
    p_351.yz = (p_351.zy * tmpvar_445).yx;
     vec3 tmpvar_446;
    tmpvar_446.y = 500.0;
    tmpvar_446.x = (30.0 - (tmpvar_357 * 100.0));
    tmpvar_446.z = (10.0 - (tmpvar_357 * 100.0));
     vec3 tmpvar_447;
    tmpvar_447 = (abs(p_351) - tmpvar_446);
     vec3 tmpvar_448;
    tmpvar_448 = max (tmpvar_447, 0.0);
     float tmpvar_449;
    tmpvar_449 = min (tmpvar_435, ((tmpvar_357 * 100.0) + (
      min (max (tmpvar_447.x, max (tmpvar_447.y, tmpvar_447.z)), 0.0)
     + 
      sqrt(dot (tmpvar_448, tmpvar_448))
    )));
     vec3 poo_450;
     vec3 po_451;
    vec3 oo_452;
    vec3 tmpvar_453;
    tmpvar_453.y = 7.3;
    tmpvar_453.x = xpos;
    tmpvar_453.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_452 = tmpvar_453;
    vec2 v_454;
    v_454 = (tmpvar_453.zx * 0.001);
    vec3 g_455;
    vec4 x12_456;
    vec2 tmpvar_457;
    tmpvar_457 = floor((v_454 + dot (v_454, vec2(0.366025, 0.366025))));
    vec2 tmpvar_458;
    tmpvar_458 = ((v_454 - tmpvar_457) + dot (tmpvar_457, vec2(0.211325, 0.211325)));
    vec2 tmpvar_459;
    if ((tmpvar_458.x > tmpvar_458.y)) {
      tmpvar_459 = vec2(1.0, 0.0);
    } else {
      tmpvar_459 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_460;
    tmpvar_460 = (tmpvar_458.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_456.zw = tmpvar_460.zw;
    x12_456.xy = (tmpvar_460.xy - tmpvar_459);
    vec2 tmpvar_461;
    tmpvar_461 = (tmpvar_457 - (floor(
      (tmpvar_457 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_462;
    tmpvar_462.xz = vec2(0.0, 1.0);
    tmpvar_462.y = tmpvar_459.y;
    vec3 x_463;
    x_463 = (tmpvar_461.y + tmpvar_462);
    vec3 x_464;
    x_464 = (((x_463 * 34.0) + 1.0) * x_463);
    vec3 tmpvar_465;
    tmpvar_465.xz = vec2(0.0, 1.0);
    tmpvar_465.y = tmpvar_459.x;
    vec3 x_466;
    x_466 = (((x_464 - 
      (floor((x_464 * 0.00346021)) * 289.0)
    ) + tmpvar_461.x) + tmpvar_465);
    vec3 x_467;
    x_467 = (((x_466 * 34.0) + 1.0) * x_466);
    vec3 tmpvar_468;
    tmpvar_468.x = dot (tmpvar_458, tmpvar_458);
    tmpvar_468.y = dot (x12_456.xy, x12_456.xy);
    tmpvar_468.z = dot (tmpvar_460.zw, tmpvar_460.zw);
    vec3 tmpvar_469;
    tmpvar_469 = max ((0.5 - tmpvar_468), 0.0);
    vec3 tmpvar_470;
    tmpvar_470 = (tmpvar_469 * tmpvar_469);
    vec3 tmpvar_471;
    tmpvar_471 = ((2.0 * fract(
      ((x_467 - (floor(
        (x_467 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_472;
    tmpvar_472 = (abs(tmpvar_471) - 0.5);
    vec3 tmpvar_473;
    tmpvar_473 = (tmpvar_471 - floor((tmpvar_471 + 0.5)));
    g_455.x = ((tmpvar_473.x * tmpvar_458.x) + (tmpvar_472.x * tmpvar_458.y));
    g_455.yz = ((tmpvar_473.yz * x12_456.xz) + (tmpvar_472.yz * x12_456.yw));
    oo_452.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_470 * tmpvar_470) * (1.79284 - 
        (0.853735 * ((tmpvar_473 * tmpvar_473) + (tmpvar_472 * tmpvar_472)))
      )), g_455))
    ) - 5.5));
     vec3 tmpvar_474;
    tmpvar_474 = (pp_350 - oo_452);
    po_451.x = tmpvar_474.x;
    mat2 tmpvar_475;
    tmpvar_475[0].x = 0.995004;
    tmpvar_475[0].y = -0.0998334;
    tmpvar_475[1].x = 0.0998334;
    tmpvar_475[1].y = 0.995004;
    po_451.yz = (tmpvar_474.zy * tmpvar_475).yx;
    float t_476;
    t_476 = (xacc * 0.01);
    float tmpvar_477;
    tmpvar_477 = cos(t_476);
    float tmpvar_478;
    tmpvar_478 = sin(t_476);
    mat2 tmpvar_479;
    tmpvar_479[0].x = tmpvar_477;
    tmpvar_479[0].y = -(tmpvar_478);
    tmpvar_479[1].x = tmpvar_478;
    tmpvar_479[1].y = tmpvar_477;
    po_451.xz = (po_451.xz * tmpvar_479);
    float t_480;
    t_480 = (xacc * -0.1);
    float tmpvar_481;
    tmpvar_481 = cos(t_480);
    float tmpvar_482;
    tmpvar_482 = sin(t_480);
    mat2 tmpvar_483;
    tmpvar_483[0].x = tmpvar_481;
    tmpvar_483[0].y = -(tmpvar_482);
    tmpvar_483[1].x = tmpvar_482;
    tmpvar_483[1].y = tmpvar_481;
     vec2 tmpvar_484;
    tmpvar_484 = (po_451.yx * tmpvar_483);
    po_451.xy = tmpvar_484.yx;
    poo_450 = po_451;
     vec3 tmpvar_485;
    tmpvar_485 = (po_451 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_486;
    tmpvar_486[0].x = -0.955336;
    tmpvar_486[0].y = -0.295523;
    tmpvar_486[1].x = 0.295523;
    tmpvar_486[1].y = -0.955336;
     vec2 tmpvar_487;
    tmpvar_487 = (tmpvar_484 * tmpvar_486);
    po_451.xy = tmpvar_487.yx;
     vec3 tmpvar_488;
    tmpvar_488 = (abs(po_451) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_489;
    tmpvar_489 = max (tmpvar_488, 0.0);
    mat2 tmpvar_490;
    tmpvar_490[0].x = -0.825337;
    tmpvar_490[0].y = 0.56464;
    tmpvar_490[1].x = -0.56464;
    tmpvar_490[1].y = -0.825337;
    po_451.xy = (tmpvar_487 * tmpvar_490).yx;
     vec3 tmpvar_491;
    tmpvar_491 = (abs(po_451) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_492;
    tmpvar_492 = max (tmpvar_491, 0.0);
    mat2 tmpvar_493;
    tmpvar_493[0].x = 0.540302;
    tmpvar_493[0].y = -0.841471;
    tmpvar_493[1].x = 0.841471;
    tmpvar_493[1].y = 0.540302;
     vec2 tmpvar_494;
    tmpvar_494 = (poo_450.xz * tmpvar_493);
    poo_450.xz = tmpvar_494;
     vec3 tmpvar_495;
    tmpvar_495 = (abs(poo_450) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_496;
    tmpvar_496 = max (tmpvar_495, 0.0);
    mat2 tmpvar_497;
    tmpvar_497[0].x = -0.416147;
    tmpvar_497[0].y = 0.909297;
    tmpvar_497[1].x = -0.909297;
    tmpvar_497[1].y = -0.416147;
    poo_450.xz = (tmpvar_494 * tmpvar_497);
     vec3 tmpvar_498;
    tmpvar_498 = (abs(poo_450) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_499;
    tmpvar_499 = max (tmpvar_498, 0.0);
     vec3 tmpvar_500;
    tmpvar_500 = (abs(tmpvar_485) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_501;
    tmpvar_501 = max (tmpvar_500, 0.0);
     float tmpvar_502;
    tmpvar_502 = min (tmpvar_449, (min (
      max (max ((min (
        max (tmpvar_498.x, max (tmpvar_498.y, tmpvar_498.z))
      , 0.0) + sqrt(
        dot (tmpvar_499, tmpvar_499)
      )), (min (
        max (tmpvar_495.x, max (tmpvar_495.y, tmpvar_495.z))
      , 0.0) + sqrt(
        dot (tmpvar_496, tmpvar_496)
      ))), min ((min (
        max (tmpvar_488.x, max (tmpvar_488.y, tmpvar_488.z))
      , 0.0) + sqrt(
        dot (tmpvar_489, tmpvar_489)
      )), (min (
        max (tmpvar_491.x, max (tmpvar_491.y, tmpvar_491.z))
      , 0.0) + sqrt(
        dot (tmpvar_492, tmpvar_492)
      ))))
    , 
      (min (max (tmpvar_500.x, max (tmpvar_500.y, tmpvar_500.z)), 0.0) + sqrt(dot (tmpvar_501, tmpvar_501)))
    ) + 0.3));
     vec3 pp_503;
    pp_503 = (pp_5 + vec3(0.0, 1.0, 0.0));
     vec3 p_504;
    p_504 = pp_503;
     float tmpvar_505;
    tmpvar_505 = max (0.0, sin((pp_503.z * 0.001)));
     float tmpvar_506;
    tmpvar_506 = (1.0 - tmpvar_505);
     float tmpvar_507;
    tmpvar_507 = (pp_503.z / (1000.0 + pp_503.z));
     float tmpvar_508;
    tmpvar_508 = (1.0 - tmpvar_507);
     float tmpvar_509;
    tmpvar_509 = max (0.0, -(sin(
      (pp_503.z * 0.0004)
    )));
     float tmpvar_510;
    tmpvar_510 = (1.0 - tmpvar_509);
     vec2 v_511;
    v_511 = (pp_503.zx * 0.001);
     vec3 g_512;
     vec4 x12_513;
     vec2 tmpvar_514;
    tmpvar_514 = floor((v_511 + dot (v_511, vec2(0.366025, 0.366025))));
     vec2 tmpvar_515;
    tmpvar_515 = ((v_511 - tmpvar_514) + dot (tmpvar_514, vec2(0.211325, 0.211325)));
    vec2 tmpvar_516;
    if ((tmpvar_515.x > tmpvar_515.y)) {
      tmpvar_516 = vec2(1.0, 0.0);
    } else {
      tmpvar_516 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_517;
    tmpvar_517 = (tmpvar_515.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_513.zw = tmpvar_517.zw;
    x12_513.xy = (tmpvar_517.xy - tmpvar_516);
     vec2 tmpvar_518;
    tmpvar_518 = (tmpvar_514 - (floor(
      (tmpvar_514 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_519;
    tmpvar_519.xz = vec2(0.0, 1.0);
    tmpvar_519.y = tmpvar_516.y;
     vec3 x_520;
    x_520 = (tmpvar_518.y + tmpvar_519);
     vec3 x_521;
    x_521 = (((x_520 * 34.0) + 1.0) * x_520);
    vec3 tmpvar_522;
    tmpvar_522.xz = vec2(0.0, 1.0);
    tmpvar_522.y = tmpvar_516.x;
     vec3 x_523;
    x_523 = (((x_521 - 
      (floor((x_521 * 0.00346021)) * 289.0)
    ) + tmpvar_518.x) + tmpvar_522);
     vec3 x_524;
    x_524 = (((x_523 * 34.0) + 1.0) * x_523);
     vec3 tmpvar_525;
    tmpvar_525.x = dot (tmpvar_515, tmpvar_515);
    tmpvar_525.y = dot (x12_513.xy, x12_513.xy);
    tmpvar_525.z = dot (tmpvar_517.zw, tmpvar_517.zw);
     vec3 tmpvar_526;
    tmpvar_526 = max ((0.5 - tmpvar_525), 0.0);
     vec3 tmpvar_527;
    tmpvar_527 = (tmpvar_526 * tmpvar_526);
     vec3 tmpvar_528;
    tmpvar_528 = ((2.0 * fract(
      ((x_524 - (floor(
        (x_524 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_529;
    tmpvar_529 = (abs(tmpvar_528) - 0.5);
     vec3 tmpvar_530;
    tmpvar_530 = (tmpvar_528 - floor((tmpvar_528 + 0.5)));
    g_512.x = ((tmpvar_530.x * tmpvar_515.x) + (tmpvar_529.x * tmpvar_515.y));
    g_512.yz = ((tmpvar_530.yz * x12_513.xz) + (tmpvar_529.yz * x12_513.yw));
     float tmpvar_531;
    tmpvar_531 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_532;
    a_532 = ((pp_503.z * 0.1) + sin((pp_503.x * 0.01)));
     float a_533;
    a_533 = (floor(a_532) - 1.0);
     float tmpvar_534;
    tmpvar_534 = floor(a_532);
     float a_535;
    a_535 = ((pp_503.z * 0.3) + sin((pp_503.x * 0.01)));
     float a_536;
    a_536 = (floor(a_535) - 1.0);
     float tmpvar_537;
    tmpvar_537 = floor(a_535);
     float tmpvar_538;
    tmpvar_538 = ((pp_503.y + (3900.0 * 
      dot (((tmpvar_527 * tmpvar_527) * (1.79284 - (0.853735 * 
        ((tmpvar_530 * tmpvar_530) + (tmpvar_529 * tmpvar_529))
      ))), g_512)
    )) + ((
      ((mix (fract(
        (float(mod (((a_533 * 90327.1) + 1230.0), ((sin(a_533) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_534 * 90327.1) + 1230.0), ((sin(tmpvar_534) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_532)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_531)
     + 
      ((mix (fract(
        (float(mod (((a_536 * 90327.1) + 1230.0), ((sin(a_536) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_537 * 90327.1) + 1230.0), ((sin(tmpvar_537) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_535)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_531)
    ) - 1.5));
     float tmpvar_539;
    tmpvar_539 = min (1e+08, (tmpvar_538 + (tmpvar_505 * 300.0)));
    p_504.y = (pp_503.y + (tmpvar_538 - pp_503.y));
     vec3 v_540;
    v_540 = (p_504 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_541;
    tmpvar_541 = floor((v_540 + dot (v_540, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_542;
    tmpvar_542 = ((v_540 - tmpvar_541) + dot (tmpvar_541, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_543;
    tmpvar_543.x = float((tmpvar_542.x >= tmpvar_542.y));
    tmpvar_543.y = float((tmpvar_542.y >= tmpvar_542.z));
    tmpvar_543.z = float((tmpvar_542.z >= tmpvar_542.x));
     vec3 tmpvar_544;
    tmpvar_544 = (1.0 - tmpvar_543);
     vec3 tmpvar_545;
    tmpvar_545 = min (tmpvar_543, tmpvar_544.zxy);
     vec3 tmpvar_546;
    tmpvar_546 = max (tmpvar_543, tmpvar_544.zxy);
     vec3 tmpvar_547;
    tmpvar_547 = ((tmpvar_542 - tmpvar_545) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_548;
    tmpvar_548 = ((tmpvar_542 - tmpvar_546) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_549;
    tmpvar_549 = (tmpvar_542 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_550;
    tmpvar_550 = (tmpvar_541 - (floor(
      (tmpvar_541 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_551;
    tmpvar_551.xw = vec2(0.0, 1.0);
    tmpvar_551.y = tmpvar_545.z;
    tmpvar_551.z = tmpvar_546.z;
     vec4 x_552;
    x_552 = (tmpvar_550.z + tmpvar_551);
     vec4 x_553;
    x_553 = (((x_552 * 34.0) + 1.0) * x_552);
     vec4 tmpvar_554;
    tmpvar_554.xw = vec2(0.0, 1.0);
    tmpvar_554.y = tmpvar_545.y;
    tmpvar_554.z = tmpvar_546.y;
     vec4 x_555;
    x_555 = (((x_553 - 
      (floor((x_553 * 0.00346021)) * 289.0)
    ) + tmpvar_550.y) + tmpvar_554);
     vec4 x_556;
    x_556 = (((x_555 * 34.0) + 1.0) * x_555);
     vec4 tmpvar_557;
    tmpvar_557.xw = vec2(0.0, 1.0);
    tmpvar_557.y = tmpvar_545.x;
    tmpvar_557.z = tmpvar_546.x;
     vec4 x_558;
    x_558 = (((x_556 - 
      (floor((x_556 * 0.00346021)) * 289.0)
    ) + tmpvar_550.x) + tmpvar_557);
     vec4 tmpvar_559;
     vec4 x_560;
    x_560 = (((x_558 * 34.0) + 1.0) * x_558);
    tmpvar_559 = (x_560 - (floor(
      (x_560 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_561;
    tmpvar_561 = (tmpvar_559 - (49.0 * floor(
      (0.0204082 * tmpvar_559)
    )));
     vec4 tmpvar_562;
    tmpvar_562 = floor((tmpvar_561 * 0.142857));
     vec4 tmpvar_563;
    tmpvar_563 = ((tmpvar_562 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_564;
    tmpvar_564 = ((floor(
      (tmpvar_561 - (7.0 * tmpvar_562))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_565;
    tmpvar_565 = ((1.0 - abs(tmpvar_563)) - abs(tmpvar_564));
     vec4 tmpvar_566;
    tmpvar_566.xy = tmpvar_563.xy;
    tmpvar_566.zw = tmpvar_564.xy;
     vec4 tmpvar_567;
    tmpvar_567.xy = tmpvar_563.zw;
    tmpvar_567.zw = tmpvar_564.zw;
     vec4 tmpvar_568;
    tmpvar_568 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_565)));
     vec4 tmpvar_569;
    tmpvar_569 = (tmpvar_566.xzyw + ((
      (floor(tmpvar_566) * 2.0)
     + 1.0).xzyw * tmpvar_568.xxyy));
     vec4 tmpvar_570;
    tmpvar_570 = (tmpvar_567.xzyw + ((
      (floor(tmpvar_567) * 2.0)
     + 1.0).xzyw * tmpvar_568.zzww));
     vec3 tmpvar_571;
    tmpvar_571.xy = tmpvar_569.xy;
    tmpvar_571.z = tmpvar_565.x;
     vec3 tmpvar_572;
    tmpvar_572.xy = tmpvar_569.zw;
    tmpvar_572.z = tmpvar_565.y;
     vec3 tmpvar_573;
    tmpvar_573.xy = tmpvar_570.xy;
    tmpvar_573.z = tmpvar_565.z;
     vec3 tmpvar_574;
    tmpvar_574.xy = tmpvar_570.zw;
    tmpvar_574.z = tmpvar_565.w;
     vec4 tmpvar_575;
    tmpvar_575.x = dot (tmpvar_571, tmpvar_571);
    tmpvar_575.y = dot (tmpvar_572, tmpvar_572);
    tmpvar_575.z = dot (tmpvar_573, tmpvar_573);
    tmpvar_575.w = dot (tmpvar_574, tmpvar_574);
     vec4 tmpvar_576;
    tmpvar_576 = (1.79284 - (0.853735 * tmpvar_575));
     vec4 tmpvar_577;
    tmpvar_577.x = dot (tmpvar_542, tmpvar_542);
    tmpvar_577.y = dot (tmpvar_547, tmpvar_547);
    tmpvar_577.z = dot (tmpvar_548, tmpvar_548);
    tmpvar_577.w = dot (tmpvar_549, tmpvar_549);
     vec4 tmpvar_578;
    tmpvar_578 = max ((0.6 - tmpvar_577), 0.0);
     vec4 tmpvar_579;
    tmpvar_579 = (tmpvar_578 * tmpvar_578);
     vec4 tmpvar_580;
    tmpvar_580.x = dot ((tmpvar_571 * tmpvar_576.x), tmpvar_542);
    tmpvar_580.y = dot ((tmpvar_572 * tmpvar_576.y), tmpvar_547);
    tmpvar_580.z = dot ((tmpvar_573 * tmpvar_576.z), tmpvar_548);
    tmpvar_580.w = dot ((tmpvar_574 * tmpvar_576.w), tmpvar_549);
     float b_581;
    b_581 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_579 * tmpvar_579), tmpvar_580)
      ) - (
        sqrt(dot (p_504.xy, p_504.xy))
       * 0.3)) + (tmpvar_505 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_503.z * 0.1)), 0.0)
    )) + (tmpvar_509 * 100.0));
     float tmpvar_582;
    tmpvar_582 = clamp ((0.5 + (
      (0.5 * (b_581 - tmpvar_539))
     / 1.01)), 0.0, 1.0);
    p_504.y = pp_503.y;
    p_504.x = (pp_503.x + ((
      sin((pp_503.z * 0.005))
     * 50.0) * tmpvar_507));
     float t_583;
    t_583 = (floor((pp_503.z / 50.0)) * 0.25);
     float tmpvar_584;
    tmpvar_584 = cos(t_583);
     float tmpvar_585;
    tmpvar_585 = sin(t_583);
     mat2 tmpvar_586;
    tmpvar_586[0].x = tmpvar_584;
    tmpvar_586[0].y = -(tmpvar_585);
    tmpvar_586[1].x = tmpvar_585;
    tmpvar_586[1].y = tmpvar_584;
     vec2 tmpvar_587;
    tmpvar_587 = (p_504.xy * tmpvar_586);
    p_504.z = ((float(mod (pp_503.z, 50.0))) - 25.0);
    p_504.xy = (((vec2(mod (tmpvar_587, 
      (200.0 + (tmpvar_506 * 400.0))
    ))) - 100.0) - (tmpvar_506 * 200.0));
     float tmpvar_588;
    tmpvar_588 = min (min ((
      mix (b_581, tmpvar_539, tmpvar_582)
     - 
      ((1.01 * tmpvar_582) * (1.0 - tmpvar_582))
    ), (
      (sqrt(dot (p_504.xz, p_504.xz)) - ((10.0 - (tmpvar_506 * 16.0)) - (tmpvar_508 * 16.0)))
     + 
      (tmpvar_509 * 100.0)
    )), ((
      sqrt(dot (p_504.yz, p_504.yz))
     - 
      ((10.0 - (tmpvar_506 * 16.0)) - (tmpvar_508 * 16.0))
    ) + (tmpvar_509 * 100.0)));
     vec3 tmpvar_589;
    tmpvar_589 = (pp_503 - o);
    p_504.yz = tmpvar_589.yz;
    p_504.x = (tmpvar_589.x + (sin(
      (pp_503.z * 0.003)
    ) * 100.0));
     float t_590;
    t_590 = (sin((pp_503.z * 0.005)) * 0.3);
     float tmpvar_591;
    tmpvar_591 = cos(t_590);
     float tmpvar_592;
    tmpvar_592 = sin(t_590);
     mat2 tmpvar_593;
    tmpvar_593[0].x = tmpvar_591;
    tmpvar_593[0].y = -(tmpvar_592);
    tmpvar_593[1].x = tmpvar_592;
    tmpvar_593[1].y = tmpvar_591;
    p_504.xz = (p_504.xz * tmpvar_593);
     vec3 tmpvar_594;
    tmpvar_594 = (p_504 + o);
    p_504.y = tmpvar_594.y;
    p_504.xz = ((vec2(mod (tmpvar_594.xz, 200.0))) - 100.0);
     float t_595;
    t_595 = (sin((p_504.z * 0.01)) * 0.3);
     float tmpvar_596;
    tmpvar_596 = cos(t_595);
     float tmpvar_597;
    tmpvar_597 = sin(t_595);
     mat2 tmpvar_598;
    tmpvar_598[0].x = tmpvar_596;
    tmpvar_598[0].y = -(tmpvar_597);
    tmpvar_598[1].x = tmpvar_597;
    tmpvar_598[1].y = tmpvar_596;
    p_504.yz = (p_504.zy * tmpvar_598).yx;
     vec3 tmpvar_599;
    tmpvar_599.y = 500.0;
    tmpvar_599.x = (30.0 - (tmpvar_510 * 100.0));
    tmpvar_599.z = (10.0 - (tmpvar_510 * 100.0));
     vec3 tmpvar_600;
    tmpvar_600 = (abs(p_504) - tmpvar_599);
     vec3 tmpvar_601;
    tmpvar_601 = max (tmpvar_600, 0.0);
     float tmpvar_602;
    tmpvar_602 = min (tmpvar_588, ((tmpvar_510 * 100.0) + (
      min (max (tmpvar_600.x, max (tmpvar_600.y, tmpvar_600.z)), 0.0)
     + 
      sqrt(dot (tmpvar_601, tmpvar_601))
    )));
     vec3 poo_603;
     vec3 po_604;
    vec3 oo_605;
    vec3 tmpvar_606;
    tmpvar_606.y = 7.3;
    tmpvar_606.x = xpos;
    tmpvar_606.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_605 = tmpvar_606;
    vec2 v_607;
    v_607 = (tmpvar_606.zx * 0.001);
    vec3 g_608;
    vec4 x12_609;
    vec2 tmpvar_610;
    tmpvar_610 = floor((v_607 + dot (v_607, vec2(0.366025, 0.366025))));
    vec2 tmpvar_611;
    tmpvar_611 = ((v_607 - tmpvar_610) + dot (tmpvar_610, vec2(0.211325, 0.211325)));
    vec2 tmpvar_612;
    if ((tmpvar_611.x > tmpvar_611.y)) {
      tmpvar_612 = vec2(1.0, 0.0);
    } else {
      tmpvar_612 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_613;
    tmpvar_613 = (tmpvar_611.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_609.zw = tmpvar_613.zw;
    x12_609.xy = (tmpvar_613.xy - tmpvar_612);
    vec2 tmpvar_614;
    tmpvar_614 = (tmpvar_610 - (floor(
      (tmpvar_610 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_615;
    tmpvar_615.xz = vec2(0.0, 1.0);
    tmpvar_615.y = tmpvar_612.y;
    vec3 x_616;
    x_616 = (tmpvar_614.y + tmpvar_615);
    vec3 x_617;
    x_617 = (((x_616 * 34.0) + 1.0) * x_616);
    vec3 tmpvar_618;
    tmpvar_618.xz = vec2(0.0, 1.0);
    tmpvar_618.y = tmpvar_612.x;
    vec3 x_619;
    x_619 = (((x_617 - 
      (floor((x_617 * 0.00346021)) * 289.0)
    ) + tmpvar_614.x) + tmpvar_618);
    vec3 x_620;
    x_620 = (((x_619 * 34.0) + 1.0) * x_619);
    vec3 tmpvar_621;
    tmpvar_621.x = dot (tmpvar_611, tmpvar_611);
    tmpvar_621.y = dot (x12_609.xy, x12_609.xy);
    tmpvar_621.z = dot (tmpvar_613.zw, tmpvar_613.zw);
    vec3 tmpvar_622;
    tmpvar_622 = max ((0.5 - tmpvar_621), 0.0);
    vec3 tmpvar_623;
    tmpvar_623 = (tmpvar_622 * tmpvar_622);
    vec3 tmpvar_624;
    tmpvar_624 = ((2.0 * fract(
      ((x_620 - (floor(
        (x_620 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_625;
    tmpvar_625 = (abs(tmpvar_624) - 0.5);
    vec3 tmpvar_626;
    tmpvar_626 = (tmpvar_624 - floor((tmpvar_624 + 0.5)));
    g_608.x = ((tmpvar_626.x * tmpvar_611.x) + (tmpvar_625.x * tmpvar_611.y));
    g_608.yz = ((tmpvar_626.yz * x12_609.xz) + (tmpvar_625.yz * x12_609.yw));
    oo_605.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_623 * tmpvar_623) * (1.79284 - 
        (0.853735 * ((tmpvar_626 * tmpvar_626) + (tmpvar_625 * tmpvar_625)))
      )), g_608))
    ) - 5.5));
     vec3 tmpvar_627;
    tmpvar_627 = (pp_503 - oo_605);
    po_604.x = tmpvar_627.x;
    mat2 tmpvar_628;
    tmpvar_628[0].x = 0.995004;
    tmpvar_628[0].y = -0.0998334;
    tmpvar_628[1].x = 0.0998334;
    tmpvar_628[1].y = 0.995004;
    po_604.yz = (tmpvar_627.zy * tmpvar_628).yx;
    float t_629;
    t_629 = (xacc * 0.01);
    float tmpvar_630;
    tmpvar_630 = cos(t_629);
    float tmpvar_631;
    tmpvar_631 = sin(t_629);
    mat2 tmpvar_632;
    tmpvar_632[0].x = tmpvar_630;
    tmpvar_632[0].y = -(tmpvar_631);
    tmpvar_632[1].x = tmpvar_631;
    tmpvar_632[1].y = tmpvar_630;
    po_604.xz = (po_604.xz * tmpvar_632);
    float t_633;
    t_633 = (xacc * -0.1);
    float tmpvar_634;
    tmpvar_634 = cos(t_633);
    float tmpvar_635;
    tmpvar_635 = sin(t_633);
    mat2 tmpvar_636;
    tmpvar_636[0].x = tmpvar_634;
    tmpvar_636[0].y = -(tmpvar_635);
    tmpvar_636[1].x = tmpvar_635;
    tmpvar_636[1].y = tmpvar_634;
     vec2 tmpvar_637;
    tmpvar_637 = (po_604.yx * tmpvar_636);
    po_604.xy = tmpvar_637.yx;
    poo_603 = po_604;
     vec3 tmpvar_638;
    tmpvar_638 = (po_604 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_639;
    tmpvar_639[0].x = -0.955336;
    tmpvar_639[0].y = -0.295523;
    tmpvar_639[1].x = 0.295523;
    tmpvar_639[1].y = -0.955336;
     vec2 tmpvar_640;
    tmpvar_640 = (tmpvar_637 * tmpvar_639);
    po_604.xy = tmpvar_640.yx;
     vec3 tmpvar_641;
    tmpvar_641 = (abs(po_604) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_642;
    tmpvar_642 = max (tmpvar_641, 0.0);
    mat2 tmpvar_643;
    tmpvar_643[0].x = -0.825337;
    tmpvar_643[0].y = 0.56464;
    tmpvar_643[1].x = -0.56464;
    tmpvar_643[1].y = -0.825337;
    po_604.xy = (tmpvar_640 * tmpvar_643).yx;
     vec3 tmpvar_644;
    tmpvar_644 = (abs(po_604) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_645;
    tmpvar_645 = max (tmpvar_644, 0.0);
    mat2 tmpvar_646;
    tmpvar_646[0].x = 0.540302;
    tmpvar_646[0].y = -0.841471;
    tmpvar_646[1].x = 0.841471;
    tmpvar_646[1].y = 0.540302;
     vec2 tmpvar_647;
    tmpvar_647 = (poo_603.xz * tmpvar_646);
    poo_603.xz = tmpvar_647;
     vec3 tmpvar_648;
    tmpvar_648 = (abs(poo_603) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_649;
    tmpvar_649 = max (tmpvar_648, 0.0);
    mat2 tmpvar_650;
    tmpvar_650[0].x = -0.416147;
    tmpvar_650[0].y = 0.909297;
    tmpvar_650[1].x = -0.909297;
    tmpvar_650[1].y = -0.416147;
    poo_603.xz = (tmpvar_647 * tmpvar_650);
     vec3 tmpvar_651;
    tmpvar_651 = (abs(poo_603) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_652;
    tmpvar_652 = max (tmpvar_651, 0.0);
     vec3 tmpvar_653;
    tmpvar_653 = (abs(tmpvar_638) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_654;
    tmpvar_654 = max (tmpvar_653, 0.0);
     float tmpvar_655;
    tmpvar_655 = min (tmpvar_602, (min (
      max (max ((min (
        max (tmpvar_651.x, max (tmpvar_651.y, tmpvar_651.z))
      , 0.0) + sqrt(
        dot (tmpvar_652, tmpvar_652)
      )), (min (
        max (tmpvar_648.x, max (tmpvar_648.y, tmpvar_648.z))
      , 0.0) + sqrt(
        dot (tmpvar_649, tmpvar_649)
      ))), min ((min (
        max (tmpvar_641.x, max (tmpvar_641.y, tmpvar_641.z))
      , 0.0) + sqrt(
        dot (tmpvar_642, tmpvar_642)
      )), (min (
        max (tmpvar_644.x, max (tmpvar_644.y, tmpvar_644.z))
      , 0.0) + sqrt(
        dot (tmpvar_645, tmpvar_645)
      ))))
    , 
      (min (max (tmpvar_653.x, max (tmpvar_653.y, tmpvar_653.z)), 0.0) + sqrt(dot (tmpvar_654, tmpvar_654)))
    ) + 0.3));
     vec3 pp_656;
    pp_656 = (pp_5 - vec3(0.0, 1.0, 0.0));
     vec3 p_657;
    p_657 = pp_656;
     float tmpvar_658;
    tmpvar_658 = max (0.0, sin((pp_656.z * 0.001)));
     float tmpvar_659;
    tmpvar_659 = (1.0 - tmpvar_658);
     float tmpvar_660;
    tmpvar_660 = (pp_656.z / (1000.0 + pp_656.z));
     float tmpvar_661;
    tmpvar_661 = (1.0 - tmpvar_660);
     float tmpvar_662;
    tmpvar_662 = max (0.0, -(sin(
      (pp_656.z * 0.0004)
    )));
     float tmpvar_663;
    tmpvar_663 = (1.0 - tmpvar_662);
     vec2 v_664;
    v_664 = (pp_656.zx * 0.001);
     vec3 g_665;
     vec4 x12_666;
     vec2 tmpvar_667;
    tmpvar_667 = floor((v_664 + dot (v_664, vec2(0.366025, 0.366025))));
     vec2 tmpvar_668;
    tmpvar_668 = ((v_664 - tmpvar_667) + dot (tmpvar_667, vec2(0.211325, 0.211325)));
    vec2 tmpvar_669;
    if ((tmpvar_668.x > tmpvar_668.y)) {
      tmpvar_669 = vec2(1.0, 0.0);
    } else {
      tmpvar_669 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_670;
    tmpvar_670 = (tmpvar_668.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_666.zw = tmpvar_670.zw;
    x12_666.xy = (tmpvar_670.xy - tmpvar_669);
     vec2 tmpvar_671;
    tmpvar_671 = (tmpvar_667 - (floor(
      (tmpvar_667 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_672;
    tmpvar_672.xz = vec2(0.0, 1.0);
    tmpvar_672.y = tmpvar_669.y;
     vec3 x_673;
    x_673 = (tmpvar_671.y + tmpvar_672);
     vec3 x_674;
    x_674 = (((x_673 * 34.0) + 1.0) * x_673);
    vec3 tmpvar_675;
    tmpvar_675.xz = vec2(0.0, 1.0);
    tmpvar_675.y = tmpvar_669.x;
     vec3 x_676;
    x_676 = (((x_674 - 
      (floor((x_674 * 0.00346021)) * 289.0)
    ) + tmpvar_671.x) + tmpvar_675);
     vec3 x_677;
    x_677 = (((x_676 * 34.0) + 1.0) * x_676);
     vec3 tmpvar_678;
    tmpvar_678.x = dot (tmpvar_668, tmpvar_668);
    tmpvar_678.y = dot (x12_666.xy, x12_666.xy);
    tmpvar_678.z = dot (tmpvar_670.zw, tmpvar_670.zw);
     vec3 tmpvar_679;
    tmpvar_679 = max ((0.5 - tmpvar_678), 0.0);
     vec3 tmpvar_680;
    tmpvar_680 = (tmpvar_679 * tmpvar_679);
     vec3 tmpvar_681;
    tmpvar_681 = ((2.0 * fract(
      ((x_677 - (floor(
        (x_677 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_682;
    tmpvar_682 = (abs(tmpvar_681) - 0.5);
     vec3 tmpvar_683;
    tmpvar_683 = (tmpvar_681 - floor((tmpvar_681 + 0.5)));
    g_665.x = ((tmpvar_683.x * tmpvar_668.x) + (tmpvar_682.x * tmpvar_668.y));
    g_665.yz = ((tmpvar_683.yz * x12_666.xz) + (tmpvar_682.yz * x12_666.yw));
     float tmpvar_684;
    tmpvar_684 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_685;
    a_685 = ((pp_656.z * 0.1) + sin((pp_656.x * 0.01)));
     float a_686;
    a_686 = (floor(a_685) - 1.0);
     float tmpvar_687;
    tmpvar_687 = floor(a_685);
     float a_688;
    a_688 = ((pp_656.z * 0.3) + sin((pp_656.x * 0.01)));
     float a_689;
    a_689 = (floor(a_688) - 1.0);
     float tmpvar_690;
    tmpvar_690 = floor(a_688);
     float tmpvar_691;
    tmpvar_691 = ((pp_656.y + (3900.0 * 
      dot (((tmpvar_680 * tmpvar_680) * (1.79284 - (0.853735 * 
        ((tmpvar_683 * tmpvar_683) + (tmpvar_682 * tmpvar_682))
      ))), g_665)
    )) + ((
      ((mix (fract(
        (float(mod (((a_686 * 90327.1) + 1230.0), ((sin(a_686) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_687 * 90327.1) + 1230.0), ((sin(tmpvar_687) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_685)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_684)
     + 
      ((mix (fract(
        (float(mod (((a_689 * 90327.1) + 1230.0), ((sin(a_689) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_690 * 90327.1) + 1230.0), ((sin(tmpvar_690) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_688)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_684)
    ) - 1.5));
     float tmpvar_692;
    tmpvar_692 = min (1e+08, (tmpvar_691 + (tmpvar_658 * 300.0)));
    p_657.y = (pp_656.y + (tmpvar_691 - pp_656.y));
     vec3 v_693;
    v_693 = (p_657 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_694;
    tmpvar_694 = floor((v_693 + dot (v_693, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_695;
    tmpvar_695 = ((v_693 - tmpvar_694) + dot (tmpvar_694, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_696;
    tmpvar_696.x = float((tmpvar_695.x >= tmpvar_695.y));
    tmpvar_696.y = float((tmpvar_695.y >= tmpvar_695.z));
    tmpvar_696.z = float((tmpvar_695.z >= tmpvar_695.x));
     vec3 tmpvar_697;
    tmpvar_697 = (1.0 - tmpvar_696);
     vec3 tmpvar_698;
    tmpvar_698 = min (tmpvar_696, tmpvar_697.zxy);
     vec3 tmpvar_699;
    tmpvar_699 = max (tmpvar_696, tmpvar_697.zxy);
     vec3 tmpvar_700;
    tmpvar_700 = ((tmpvar_695 - tmpvar_698) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_701;
    tmpvar_701 = ((tmpvar_695 - tmpvar_699) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_702;
    tmpvar_702 = (tmpvar_695 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_703;
    tmpvar_703 = (tmpvar_694 - (floor(
      (tmpvar_694 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_704;
    tmpvar_704.xw = vec2(0.0, 1.0);
    tmpvar_704.y = tmpvar_698.z;
    tmpvar_704.z = tmpvar_699.z;
     vec4 x_705;
    x_705 = (tmpvar_703.z + tmpvar_704);
     vec4 x_706;
    x_706 = (((x_705 * 34.0) + 1.0) * x_705);
     vec4 tmpvar_707;
    tmpvar_707.xw = vec2(0.0, 1.0);
    tmpvar_707.y = tmpvar_698.y;
    tmpvar_707.z = tmpvar_699.y;
     vec4 x_708;
    x_708 = (((x_706 - 
      (floor((x_706 * 0.00346021)) * 289.0)
    ) + tmpvar_703.y) + tmpvar_707);
     vec4 x_709;
    x_709 = (((x_708 * 34.0) + 1.0) * x_708);
     vec4 tmpvar_710;
    tmpvar_710.xw = vec2(0.0, 1.0);
    tmpvar_710.y = tmpvar_698.x;
    tmpvar_710.z = tmpvar_699.x;
     vec4 x_711;
    x_711 = (((x_709 - 
      (floor((x_709 * 0.00346021)) * 289.0)
    ) + tmpvar_703.x) + tmpvar_710);
     vec4 tmpvar_712;
     vec4 x_713;
    x_713 = (((x_711 * 34.0) + 1.0) * x_711);
    tmpvar_712 = (x_713 - (floor(
      (x_713 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_714;
    tmpvar_714 = (tmpvar_712 - (49.0 * floor(
      (0.0204082 * tmpvar_712)
    )));
     vec4 tmpvar_715;
    tmpvar_715 = floor((tmpvar_714 * 0.142857));
     vec4 tmpvar_716;
    tmpvar_716 = ((tmpvar_715 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_717;
    tmpvar_717 = ((floor(
      (tmpvar_714 - (7.0 * tmpvar_715))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_718;
    tmpvar_718 = ((1.0 - abs(tmpvar_716)) - abs(tmpvar_717));
     vec4 tmpvar_719;
    tmpvar_719.xy = tmpvar_716.xy;
    tmpvar_719.zw = tmpvar_717.xy;
     vec4 tmpvar_720;
    tmpvar_720.xy = tmpvar_716.zw;
    tmpvar_720.zw = tmpvar_717.zw;
     vec4 tmpvar_721;
    tmpvar_721 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_718)));
     vec4 tmpvar_722;
    tmpvar_722 = (tmpvar_719.xzyw + ((
      (floor(tmpvar_719) * 2.0)
     + 1.0).xzyw * tmpvar_721.xxyy));
     vec4 tmpvar_723;
    tmpvar_723 = (tmpvar_720.xzyw + ((
      (floor(tmpvar_720) * 2.0)
     + 1.0).xzyw * tmpvar_721.zzww));
     vec3 tmpvar_724;
    tmpvar_724.xy = tmpvar_722.xy;
    tmpvar_724.z = tmpvar_718.x;
     vec3 tmpvar_725;
    tmpvar_725.xy = tmpvar_722.zw;
    tmpvar_725.z = tmpvar_718.y;
     vec3 tmpvar_726;
    tmpvar_726.xy = tmpvar_723.xy;
    tmpvar_726.z = tmpvar_718.z;
     vec3 tmpvar_727;
    tmpvar_727.xy = tmpvar_723.zw;
    tmpvar_727.z = tmpvar_718.w;
     vec4 tmpvar_728;
    tmpvar_728.x = dot (tmpvar_724, tmpvar_724);
    tmpvar_728.y = dot (tmpvar_725, tmpvar_725);
    tmpvar_728.z = dot (tmpvar_726, tmpvar_726);
    tmpvar_728.w = dot (tmpvar_727, tmpvar_727);
     vec4 tmpvar_729;
    tmpvar_729 = (1.79284 - (0.853735 * tmpvar_728));
     vec4 tmpvar_730;
    tmpvar_730.x = dot (tmpvar_695, tmpvar_695);
    tmpvar_730.y = dot (tmpvar_700, tmpvar_700);
    tmpvar_730.z = dot (tmpvar_701, tmpvar_701);
    tmpvar_730.w = dot (tmpvar_702, tmpvar_702);
     vec4 tmpvar_731;
    tmpvar_731 = max ((0.6 - tmpvar_730), 0.0);
     vec4 tmpvar_732;
    tmpvar_732 = (tmpvar_731 * tmpvar_731);
     vec4 tmpvar_733;
    tmpvar_733.x = dot ((tmpvar_724 * tmpvar_729.x), tmpvar_695);
    tmpvar_733.y = dot ((tmpvar_725 * tmpvar_729.y), tmpvar_700);
    tmpvar_733.z = dot ((tmpvar_726 * tmpvar_729.z), tmpvar_701);
    tmpvar_733.w = dot ((tmpvar_727 * tmpvar_729.w), tmpvar_702);
     float b_734;
    b_734 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_732 * tmpvar_732), tmpvar_733)
      ) - (
        sqrt(dot (p_657.xy, p_657.xy))
       * 0.3)) + (tmpvar_658 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_656.z * 0.1)), 0.0)
    )) + (tmpvar_662 * 100.0));
     float tmpvar_735;
    tmpvar_735 = clamp ((0.5 + (
      (0.5 * (b_734 - tmpvar_692))
     / 1.01)), 0.0, 1.0);
    p_657.y = pp_656.y;
    p_657.x = (pp_656.x + ((
      sin((pp_656.z * 0.005))
     * 50.0) * tmpvar_660));
     float t_736;
    t_736 = (floor((pp_656.z / 50.0)) * 0.25);
     float tmpvar_737;
    tmpvar_737 = cos(t_736);
     float tmpvar_738;
    tmpvar_738 = sin(t_736);
     mat2 tmpvar_739;
    tmpvar_739[0].x = tmpvar_737;
    tmpvar_739[0].y = -(tmpvar_738);
    tmpvar_739[1].x = tmpvar_738;
    tmpvar_739[1].y = tmpvar_737;
     vec2 tmpvar_740;
    tmpvar_740 = (p_657.xy * tmpvar_739);
    p_657.z = ((float(mod (pp_656.z, 50.0))) - 25.0);
    p_657.xy = (((vec2(mod (tmpvar_740, 
      (200.0 + (tmpvar_659 * 400.0))
    ))) - 100.0) - (tmpvar_659 * 200.0));
     float tmpvar_741;
    tmpvar_741 = min (min ((
      mix (b_734, tmpvar_692, tmpvar_735)
     - 
      ((1.01 * tmpvar_735) * (1.0 - tmpvar_735))
    ), (
      (sqrt(dot (p_657.xz, p_657.xz)) - ((10.0 - (tmpvar_659 * 16.0)) - (tmpvar_661 * 16.0)))
     + 
      (tmpvar_662 * 100.0)
    )), ((
      sqrt(dot (p_657.yz, p_657.yz))
     - 
      ((10.0 - (tmpvar_659 * 16.0)) - (tmpvar_661 * 16.0))
    ) + (tmpvar_662 * 100.0)));
     vec3 tmpvar_742;
    tmpvar_742 = (pp_656 - o);
    p_657.yz = tmpvar_742.yz;
    p_657.x = (tmpvar_742.x + (sin(
      (pp_656.z * 0.003)
    ) * 100.0));
     float t_743;
    t_743 = (sin((pp_656.z * 0.005)) * 0.3);
     float tmpvar_744;
    tmpvar_744 = cos(t_743);
     float tmpvar_745;
    tmpvar_745 = sin(t_743);
     mat2 tmpvar_746;
    tmpvar_746[0].x = tmpvar_744;
    tmpvar_746[0].y = -(tmpvar_745);
    tmpvar_746[1].x = tmpvar_745;
    tmpvar_746[1].y = tmpvar_744;
    p_657.xz = (p_657.xz * tmpvar_746);
     vec3 tmpvar_747;
    tmpvar_747 = (p_657 + o);
    p_657.y = tmpvar_747.y;
    p_657.xz = ((vec2(mod (tmpvar_747.xz, 200.0))) - 100.0);
     float t_748;
    t_748 = (sin((p_657.z * 0.01)) * 0.3);
     float tmpvar_749;
    tmpvar_749 = cos(t_748);
     float tmpvar_750;
    tmpvar_750 = sin(t_748);
     mat2 tmpvar_751;
    tmpvar_751[0].x = tmpvar_749;
    tmpvar_751[0].y = -(tmpvar_750);
    tmpvar_751[1].x = tmpvar_750;
    tmpvar_751[1].y = tmpvar_749;
    p_657.yz = (p_657.zy * tmpvar_751).yx;
     vec3 tmpvar_752;
    tmpvar_752.y = 500.0;
    tmpvar_752.x = (30.0 - (tmpvar_663 * 100.0));
    tmpvar_752.z = (10.0 - (tmpvar_663 * 100.0));
     vec3 tmpvar_753;
    tmpvar_753 = (abs(p_657) - tmpvar_752);
     vec3 tmpvar_754;
    tmpvar_754 = max (tmpvar_753, 0.0);
     float tmpvar_755;
    tmpvar_755 = min (tmpvar_741, ((tmpvar_663 * 100.0) + (
      min (max (tmpvar_753.x, max (tmpvar_753.y, tmpvar_753.z)), 0.0)
     + 
      sqrt(dot (tmpvar_754, tmpvar_754))
    )));
     vec3 poo_756;
     vec3 po_757;
    vec3 oo_758;
    vec3 tmpvar_759;
    tmpvar_759.y = 7.3;
    tmpvar_759.x = xpos;
    tmpvar_759.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_758 = tmpvar_759;
    vec2 v_760;
    v_760 = (tmpvar_759.zx * 0.001);
    vec3 g_761;
    vec4 x12_762;
    vec2 tmpvar_763;
    tmpvar_763 = floor((v_760 + dot (v_760, vec2(0.366025, 0.366025))));
    vec2 tmpvar_764;
    tmpvar_764 = ((v_760 - tmpvar_763) + dot (tmpvar_763, vec2(0.211325, 0.211325)));
    vec2 tmpvar_765;
    if ((tmpvar_764.x > tmpvar_764.y)) {
      tmpvar_765 = vec2(1.0, 0.0);
    } else {
      tmpvar_765 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_766;
    tmpvar_766 = (tmpvar_764.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_762.zw = tmpvar_766.zw;
    x12_762.xy = (tmpvar_766.xy - tmpvar_765);
    vec2 tmpvar_767;
    tmpvar_767 = (tmpvar_763 - (floor(
      (tmpvar_763 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_768;
    tmpvar_768.xz = vec2(0.0, 1.0);
    tmpvar_768.y = tmpvar_765.y;
    vec3 x_769;
    x_769 = (tmpvar_767.y + tmpvar_768);
    vec3 x_770;
    x_770 = (((x_769 * 34.0) + 1.0) * x_769);
    vec3 tmpvar_771;
    tmpvar_771.xz = vec2(0.0, 1.0);
    tmpvar_771.y = tmpvar_765.x;
    vec3 x_772;
    x_772 = (((x_770 - 
      (floor((x_770 * 0.00346021)) * 289.0)
    ) + tmpvar_767.x) + tmpvar_771);
    vec3 x_773;
    x_773 = (((x_772 * 34.0) + 1.0) * x_772);
    vec3 tmpvar_774;
    tmpvar_774.x = dot (tmpvar_764, tmpvar_764);
    tmpvar_774.y = dot (x12_762.xy, x12_762.xy);
    tmpvar_774.z = dot (tmpvar_766.zw, tmpvar_766.zw);
    vec3 tmpvar_775;
    tmpvar_775 = max ((0.5 - tmpvar_774), 0.0);
    vec3 tmpvar_776;
    tmpvar_776 = (tmpvar_775 * tmpvar_775);
    vec3 tmpvar_777;
    tmpvar_777 = ((2.0 * fract(
      ((x_773 - (floor(
        (x_773 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_778;
    tmpvar_778 = (abs(tmpvar_777) - 0.5);
    vec3 tmpvar_779;
    tmpvar_779 = (tmpvar_777 - floor((tmpvar_777 + 0.5)));
    g_761.x = ((tmpvar_779.x * tmpvar_764.x) + (tmpvar_778.x * tmpvar_764.y));
    g_761.yz = ((tmpvar_779.yz * x12_762.xz) + (tmpvar_778.yz * x12_762.yw));
    oo_758.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_776 * tmpvar_776) * (1.79284 - 
        (0.853735 * ((tmpvar_779 * tmpvar_779) + (tmpvar_778 * tmpvar_778)))
      )), g_761))
    ) - 5.5));
     vec3 tmpvar_780;
    tmpvar_780 = (pp_656 - oo_758);
    po_757.x = tmpvar_780.x;
    mat2 tmpvar_781;
    tmpvar_781[0].x = 0.995004;
    tmpvar_781[0].y = -0.0998334;
    tmpvar_781[1].x = 0.0998334;
    tmpvar_781[1].y = 0.995004;
    po_757.yz = (tmpvar_780.zy * tmpvar_781).yx;
    float t_782;
    t_782 = (xacc * 0.01);
    float tmpvar_783;
    tmpvar_783 = cos(t_782);
    float tmpvar_784;
    tmpvar_784 = sin(t_782);
    mat2 tmpvar_785;
    tmpvar_785[0].x = tmpvar_783;
    tmpvar_785[0].y = -(tmpvar_784);
    tmpvar_785[1].x = tmpvar_784;
    tmpvar_785[1].y = tmpvar_783;
    po_757.xz = (po_757.xz * tmpvar_785);
    float t_786;
    t_786 = (xacc * -0.1);
    float tmpvar_787;
    tmpvar_787 = cos(t_786);
    float tmpvar_788;
    tmpvar_788 = sin(t_786);
    mat2 tmpvar_789;
    tmpvar_789[0].x = tmpvar_787;
    tmpvar_789[0].y = -(tmpvar_788);
    tmpvar_789[1].x = tmpvar_788;
    tmpvar_789[1].y = tmpvar_787;
     vec2 tmpvar_790;
    tmpvar_790 = (po_757.yx * tmpvar_789);
    po_757.xy = tmpvar_790.yx;
    poo_756 = po_757;
     vec3 tmpvar_791;
    tmpvar_791 = (po_757 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_792;
    tmpvar_792[0].x = -0.955336;
    tmpvar_792[0].y = -0.295523;
    tmpvar_792[1].x = 0.295523;
    tmpvar_792[1].y = -0.955336;
     vec2 tmpvar_793;
    tmpvar_793 = (tmpvar_790 * tmpvar_792);
    po_757.xy = tmpvar_793.yx;
     vec3 tmpvar_794;
    tmpvar_794 = (abs(po_757) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_795;
    tmpvar_795 = max (tmpvar_794, 0.0);
    mat2 tmpvar_796;
    tmpvar_796[0].x = -0.825337;
    tmpvar_796[0].y = 0.56464;
    tmpvar_796[1].x = -0.56464;
    tmpvar_796[1].y = -0.825337;
    po_757.xy = (tmpvar_793 * tmpvar_796).yx;
     vec3 tmpvar_797;
    tmpvar_797 = (abs(po_757) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_798;
    tmpvar_798 = max (tmpvar_797, 0.0);
    mat2 tmpvar_799;
    tmpvar_799[0].x = 0.540302;
    tmpvar_799[0].y = -0.841471;
    tmpvar_799[1].x = 0.841471;
    tmpvar_799[1].y = 0.540302;
     vec2 tmpvar_800;
    tmpvar_800 = (poo_756.xz * tmpvar_799);
    poo_756.xz = tmpvar_800;
     vec3 tmpvar_801;
    tmpvar_801 = (abs(poo_756) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_802;
    tmpvar_802 = max (tmpvar_801, 0.0);
    mat2 tmpvar_803;
    tmpvar_803[0].x = -0.416147;
    tmpvar_803[0].y = 0.909297;
    tmpvar_803[1].x = -0.909297;
    tmpvar_803[1].y = -0.416147;
    poo_756.xz = (tmpvar_800 * tmpvar_803);
     vec3 tmpvar_804;
    tmpvar_804 = (abs(poo_756) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_805;
    tmpvar_805 = max (tmpvar_804, 0.0);
     vec3 tmpvar_806;
    tmpvar_806 = (abs(tmpvar_791) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_807;
    tmpvar_807 = max (tmpvar_806, 0.0);
     float tmpvar_808;
    tmpvar_808 = min (tmpvar_755, (min (
      max (max ((min (
        max (tmpvar_804.x, max (tmpvar_804.y, tmpvar_804.z))
      , 0.0) + sqrt(
        dot (tmpvar_805, tmpvar_805)
      )), (min (
        max (tmpvar_801.x, max (tmpvar_801.y, tmpvar_801.z))
      , 0.0) + sqrt(
        dot (tmpvar_802, tmpvar_802)
      ))), min ((min (
        max (tmpvar_794.x, max (tmpvar_794.y, tmpvar_794.z))
      , 0.0) + sqrt(
        dot (tmpvar_795, tmpvar_795)
      )), (min (
        max (tmpvar_797.x, max (tmpvar_797.y, tmpvar_797.z))
      , 0.0) + sqrt(
        dot (tmpvar_798, tmpvar_798)
      ))))
    , 
      (min (max (tmpvar_806.x, max (tmpvar_806.y, tmpvar_806.z)), 0.0) + sqrt(dot (tmpvar_807, tmpvar_807)))
    ) + 0.3));
     vec3 pp_809;
    pp_809 = (pp_5 + vec3(0.0, 0.0, 1.0));
     vec3 p_810;
    p_810 = pp_809;
     float tmpvar_811;
    tmpvar_811 = max (0.0, sin((pp_809.z * 0.001)));
     float tmpvar_812;
    tmpvar_812 = (1.0 - tmpvar_811);
     float tmpvar_813;
    tmpvar_813 = (pp_809.z / (1000.0 + pp_809.z));
     float tmpvar_814;
    tmpvar_814 = (1.0 - tmpvar_813);
     float tmpvar_815;
    tmpvar_815 = max (0.0, -(sin(
      (pp_809.z * 0.0004)
    )));
     float tmpvar_816;
    tmpvar_816 = (1.0 - tmpvar_815);
     vec2 v_817;
    v_817 = (pp_809.zx * 0.001);
     vec3 g_818;
     vec4 x12_819;
     vec2 tmpvar_820;
    tmpvar_820 = floor((v_817 + dot (v_817, vec2(0.366025, 0.366025))));
     vec2 tmpvar_821;
    tmpvar_821 = ((v_817 - tmpvar_820) + dot (tmpvar_820, vec2(0.211325, 0.211325)));
    vec2 tmpvar_822;
    if ((tmpvar_821.x > tmpvar_821.y)) {
      tmpvar_822 = vec2(1.0, 0.0);
    } else {
      tmpvar_822 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_823;
    tmpvar_823 = (tmpvar_821.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_819.zw = tmpvar_823.zw;
    x12_819.xy = (tmpvar_823.xy - tmpvar_822);
     vec2 tmpvar_824;
    tmpvar_824 = (tmpvar_820 - (floor(
      (tmpvar_820 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_825;
    tmpvar_825.xz = vec2(0.0, 1.0);
    tmpvar_825.y = tmpvar_822.y;
     vec3 x_826;
    x_826 = (tmpvar_824.y + tmpvar_825);
     vec3 x_827;
    x_827 = (((x_826 * 34.0) + 1.0) * x_826);
    vec3 tmpvar_828;
    tmpvar_828.xz = vec2(0.0, 1.0);
    tmpvar_828.y = tmpvar_822.x;
     vec3 x_829;
    x_829 = (((x_827 - 
      (floor((x_827 * 0.00346021)) * 289.0)
    ) + tmpvar_824.x) + tmpvar_828);
     vec3 x_830;
    x_830 = (((x_829 * 34.0) + 1.0) * x_829);
     vec3 tmpvar_831;
    tmpvar_831.x = dot (tmpvar_821, tmpvar_821);
    tmpvar_831.y = dot (x12_819.xy, x12_819.xy);
    tmpvar_831.z = dot (tmpvar_823.zw, tmpvar_823.zw);
     vec3 tmpvar_832;
    tmpvar_832 = max ((0.5 - tmpvar_831), 0.0);
     vec3 tmpvar_833;
    tmpvar_833 = (tmpvar_832 * tmpvar_832);
     vec3 tmpvar_834;
    tmpvar_834 = ((2.0 * fract(
      ((x_830 - (floor(
        (x_830 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_835;
    tmpvar_835 = (abs(tmpvar_834) - 0.5);
     vec3 tmpvar_836;
    tmpvar_836 = (tmpvar_834 - floor((tmpvar_834 + 0.5)));
    g_818.x = ((tmpvar_836.x * tmpvar_821.x) + (tmpvar_835.x * tmpvar_821.y));
    g_818.yz = ((tmpvar_836.yz * x12_819.xz) + (tmpvar_835.yz * x12_819.yw));
     float tmpvar_837;
    tmpvar_837 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_838;
    a_838 = ((pp_809.z * 0.1) + sin((pp_809.x * 0.01)));
     float a_839;
    a_839 = (floor(a_838) - 1.0);
     float tmpvar_840;
    tmpvar_840 = floor(a_838);
     float a_841;
    a_841 = ((pp_809.z * 0.3) + sin((pp_809.x * 0.01)));
     float a_842;
    a_842 = (floor(a_841) - 1.0);
     float tmpvar_843;
    tmpvar_843 = floor(a_841);
     float tmpvar_844;
    tmpvar_844 = ((pp_809.y + (3900.0 * 
      dot (((tmpvar_833 * tmpvar_833) * (1.79284 - (0.853735 * 
        ((tmpvar_836 * tmpvar_836) + (tmpvar_835 * tmpvar_835))
      ))), g_818)
    )) + ((
      ((mix (fract(
        (float(mod (((a_839 * 90327.1) + 1230.0), ((sin(a_839) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_840 * 90327.1) + 1230.0), ((sin(tmpvar_840) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_838)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_837)
     + 
      ((mix (fract(
        (float(mod (((a_842 * 90327.1) + 1230.0), ((sin(a_842) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_843 * 90327.1) + 1230.0), ((sin(tmpvar_843) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_841)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_837)
    ) - 1.5));
     float tmpvar_845;
    tmpvar_845 = min (1e+08, (tmpvar_844 + (tmpvar_811 * 300.0)));
    p_810.y = (pp_809.y + (tmpvar_844 - pp_809.y));
     vec3 v_846;
    v_846 = (p_810 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_847;
    tmpvar_847 = floor((v_846 + dot (v_846, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_848;
    tmpvar_848 = ((v_846 - tmpvar_847) + dot (tmpvar_847, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_849;
    tmpvar_849.x = float((tmpvar_848.x >= tmpvar_848.y));
    tmpvar_849.y = float((tmpvar_848.y >= tmpvar_848.z));
    tmpvar_849.z = float((tmpvar_848.z >= tmpvar_848.x));
     vec3 tmpvar_850;
    tmpvar_850 = (1.0 - tmpvar_849);
     vec3 tmpvar_851;
    tmpvar_851 = min (tmpvar_849, tmpvar_850.zxy);
     vec3 tmpvar_852;
    tmpvar_852 = max (tmpvar_849, tmpvar_850.zxy);
     vec3 tmpvar_853;
    tmpvar_853 = ((tmpvar_848 - tmpvar_851) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_854;
    tmpvar_854 = ((tmpvar_848 - tmpvar_852) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_855;
    tmpvar_855 = (tmpvar_848 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_856;
    tmpvar_856 = (tmpvar_847 - (floor(
      (tmpvar_847 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_857;
    tmpvar_857.xw = vec2(0.0, 1.0);
    tmpvar_857.y = tmpvar_851.z;
    tmpvar_857.z = tmpvar_852.z;
     vec4 x_858;
    x_858 = (tmpvar_856.z + tmpvar_857);
     vec4 x_859;
    x_859 = (((x_858 * 34.0) + 1.0) * x_858);
     vec4 tmpvar_860;
    tmpvar_860.xw = vec2(0.0, 1.0);
    tmpvar_860.y = tmpvar_851.y;
    tmpvar_860.z = tmpvar_852.y;
     vec4 x_861;
    x_861 = (((x_859 - 
      (floor((x_859 * 0.00346021)) * 289.0)
    ) + tmpvar_856.y) + tmpvar_860);
     vec4 x_862;
    x_862 = (((x_861 * 34.0) + 1.0) * x_861);
     vec4 tmpvar_863;
    tmpvar_863.xw = vec2(0.0, 1.0);
    tmpvar_863.y = tmpvar_851.x;
    tmpvar_863.z = tmpvar_852.x;
     vec4 x_864;
    x_864 = (((x_862 - 
      (floor((x_862 * 0.00346021)) * 289.0)
    ) + tmpvar_856.x) + tmpvar_863);
     vec4 tmpvar_865;
     vec4 x_866;
    x_866 = (((x_864 * 34.0) + 1.0) * x_864);
    tmpvar_865 = (x_866 - (floor(
      (x_866 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_867;
    tmpvar_867 = (tmpvar_865 - (49.0 * floor(
      (0.0204082 * tmpvar_865)
    )));
     vec4 tmpvar_868;
    tmpvar_868 = floor((tmpvar_867 * 0.142857));
     vec4 tmpvar_869;
    tmpvar_869 = ((tmpvar_868 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_870;
    tmpvar_870 = ((floor(
      (tmpvar_867 - (7.0 * tmpvar_868))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_871;
    tmpvar_871 = ((1.0 - abs(tmpvar_869)) - abs(tmpvar_870));
     vec4 tmpvar_872;
    tmpvar_872.xy = tmpvar_869.xy;
    tmpvar_872.zw = tmpvar_870.xy;
     vec4 tmpvar_873;
    tmpvar_873.xy = tmpvar_869.zw;
    tmpvar_873.zw = tmpvar_870.zw;
     vec4 tmpvar_874;
    tmpvar_874 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_871)));
     vec4 tmpvar_875;
    tmpvar_875 = (tmpvar_872.xzyw + ((
      (floor(tmpvar_872) * 2.0)
     + 1.0).xzyw * tmpvar_874.xxyy));
     vec4 tmpvar_876;
    tmpvar_876 = (tmpvar_873.xzyw + ((
      (floor(tmpvar_873) * 2.0)
     + 1.0).xzyw * tmpvar_874.zzww));
     vec3 tmpvar_877;
    tmpvar_877.xy = tmpvar_875.xy;
    tmpvar_877.z = tmpvar_871.x;
     vec3 tmpvar_878;
    tmpvar_878.xy = tmpvar_875.zw;
    tmpvar_878.z = tmpvar_871.y;
     vec3 tmpvar_879;
    tmpvar_879.xy = tmpvar_876.xy;
    tmpvar_879.z = tmpvar_871.z;
     vec3 tmpvar_880;
    tmpvar_880.xy = tmpvar_876.zw;
    tmpvar_880.z = tmpvar_871.w;
     vec4 tmpvar_881;
    tmpvar_881.x = dot (tmpvar_877, tmpvar_877);
    tmpvar_881.y = dot (tmpvar_878, tmpvar_878);
    tmpvar_881.z = dot (tmpvar_879, tmpvar_879);
    tmpvar_881.w = dot (tmpvar_880, tmpvar_880);
     vec4 tmpvar_882;
    tmpvar_882 = (1.79284 - (0.853735 * tmpvar_881));
     vec4 tmpvar_883;
    tmpvar_883.x = dot (tmpvar_848, tmpvar_848);
    tmpvar_883.y = dot (tmpvar_853, tmpvar_853);
    tmpvar_883.z = dot (tmpvar_854, tmpvar_854);
    tmpvar_883.w = dot (tmpvar_855, tmpvar_855);
     vec4 tmpvar_884;
    tmpvar_884 = max ((0.6 - tmpvar_883), 0.0);
     vec4 tmpvar_885;
    tmpvar_885 = (tmpvar_884 * tmpvar_884);
     vec4 tmpvar_886;
    tmpvar_886.x = dot ((tmpvar_877 * tmpvar_882.x), tmpvar_848);
    tmpvar_886.y = dot ((tmpvar_878 * tmpvar_882.y), tmpvar_853);
    tmpvar_886.z = dot ((tmpvar_879 * tmpvar_882.z), tmpvar_854);
    tmpvar_886.w = dot ((tmpvar_880 * tmpvar_882.w), tmpvar_855);
     float b_887;
    b_887 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_885 * tmpvar_885), tmpvar_886)
      ) - (
        sqrt(dot (p_810.xy, p_810.xy))
       * 0.3)) + (tmpvar_811 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_809.z * 0.1)), 0.0)
    )) + (tmpvar_815 * 100.0));
     float tmpvar_888;
    tmpvar_888 = clamp ((0.5 + (
      (0.5 * (b_887 - tmpvar_845))
     / 1.01)), 0.0, 1.0);
    p_810.y = pp_809.y;
    p_810.x = (pp_809.x + ((
      sin((pp_809.z * 0.005))
     * 50.0) * tmpvar_813));
     float t_889;
    t_889 = (floor((pp_809.z / 50.0)) * 0.25);
     float tmpvar_890;
    tmpvar_890 = cos(t_889);
     float tmpvar_891;
    tmpvar_891 = sin(t_889);
     mat2 tmpvar_892;
    tmpvar_892[0].x = tmpvar_890;
    tmpvar_892[0].y = -(tmpvar_891);
    tmpvar_892[1].x = tmpvar_891;
    tmpvar_892[1].y = tmpvar_890;
     vec2 tmpvar_893;
    tmpvar_893 = (p_810.xy * tmpvar_892);
    p_810.z = ((float(mod (pp_809.z, 50.0))) - 25.0);
    p_810.xy = (((vec2(mod (tmpvar_893, 
      (200.0 + (tmpvar_812 * 400.0))
    ))) - 100.0) - (tmpvar_812 * 200.0));
     float tmpvar_894;
    tmpvar_894 = min (min ((
      mix (b_887, tmpvar_845, tmpvar_888)
     - 
      ((1.01 * tmpvar_888) * (1.0 - tmpvar_888))
    ), (
      (sqrt(dot (p_810.xz, p_810.xz)) - ((10.0 - (tmpvar_812 * 16.0)) - (tmpvar_814 * 16.0)))
     + 
      (tmpvar_815 * 100.0)
    )), ((
      sqrt(dot (p_810.yz, p_810.yz))
     - 
      ((10.0 - (tmpvar_812 * 16.0)) - (tmpvar_814 * 16.0))
    ) + (tmpvar_815 * 100.0)));
     vec3 tmpvar_895;
    tmpvar_895 = (pp_809 - o);
    p_810.yz = tmpvar_895.yz;
    p_810.x = (tmpvar_895.x + (sin(
      (pp_809.z * 0.003)
    ) * 100.0));
     float t_896;
    t_896 = (sin((pp_809.z * 0.005)) * 0.3);
     float tmpvar_897;
    tmpvar_897 = cos(t_896);
     float tmpvar_898;
    tmpvar_898 = sin(t_896);
     mat2 tmpvar_899;
    tmpvar_899[0].x = tmpvar_897;
    tmpvar_899[0].y = -(tmpvar_898);
    tmpvar_899[1].x = tmpvar_898;
    tmpvar_899[1].y = tmpvar_897;
    p_810.xz = (p_810.xz * tmpvar_899);
     vec3 tmpvar_900;
    tmpvar_900 = (p_810 + o);
    p_810.y = tmpvar_900.y;
    p_810.xz = ((vec2(mod (tmpvar_900.xz, 200.0))) - 100.0);
     float t_901;
    t_901 = (sin((p_810.z * 0.01)) * 0.3);
     float tmpvar_902;
    tmpvar_902 = cos(t_901);
     float tmpvar_903;
    tmpvar_903 = sin(t_901);
     mat2 tmpvar_904;
    tmpvar_904[0].x = tmpvar_902;
    tmpvar_904[0].y = -(tmpvar_903);
    tmpvar_904[1].x = tmpvar_903;
    tmpvar_904[1].y = tmpvar_902;
    p_810.yz = (p_810.zy * tmpvar_904).yx;
     vec3 tmpvar_905;
    tmpvar_905.y = 500.0;
    tmpvar_905.x = (30.0 - (tmpvar_816 * 100.0));
    tmpvar_905.z = (10.0 - (tmpvar_816 * 100.0));
     vec3 tmpvar_906;
    tmpvar_906 = (abs(p_810) - tmpvar_905);
     vec3 tmpvar_907;
    tmpvar_907 = max (tmpvar_906, 0.0);
     float tmpvar_908;
    tmpvar_908 = min (tmpvar_894, ((tmpvar_816 * 100.0) + (
      min (max (tmpvar_906.x, max (tmpvar_906.y, tmpvar_906.z)), 0.0)
     + 
      sqrt(dot (tmpvar_907, tmpvar_907))
    )));
     vec3 poo_909;
     vec3 po_910;
    vec3 oo_911;
    vec3 tmpvar_912;
    tmpvar_912.y = 7.3;
    tmpvar_912.x = xpos;
    tmpvar_912.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_911 = tmpvar_912;
    vec2 v_913;
    v_913 = (tmpvar_912.zx * 0.001);
    vec3 g_914;
    vec4 x12_915;
    vec2 tmpvar_916;
    tmpvar_916 = floor((v_913 + dot (v_913, vec2(0.366025, 0.366025))));
    vec2 tmpvar_917;
    tmpvar_917 = ((v_913 - tmpvar_916) + dot (tmpvar_916, vec2(0.211325, 0.211325)));
    vec2 tmpvar_918;
    if ((tmpvar_917.x > tmpvar_917.y)) {
      tmpvar_918 = vec2(1.0, 0.0);
    } else {
      tmpvar_918 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_919;
    tmpvar_919 = (tmpvar_917.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_915.zw = tmpvar_919.zw;
    x12_915.xy = (tmpvar_919.xy - tmpvar_918);
    vec2 tmpvar_920;
    tmpvar_920 = (tmpvar_916 - (floor(
      (tmpvar_916 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_921;
    tmpvar_921.xz = vec2(0.0, 1.0);
    tmpvar_921.y = tmpvar_918.y;
    vec3 x_922;
    x_922 = (tmpvar_920.y + tmpvar_921);
    vec3 x_923;
    x_923 = (((x_922 * 34.0) + 1.0) * x_922);
    vec3 tmpvar_924;
    tmpvar_924.xz = vec2(0.0, 1.0);
    tmpvar_924.y = tmpvar_918.x;
    vec3 x_925;
    x_925 = (((x_923 - 
      (floor((x_923 * 0.00346021)) * 289.0)
    ) + tmpvar_920.x) + tmpvar_924);
    vec3 x_926;
    x_926 = (((x_925 * 34.0) + 1.0) * x_925);
    vec3 tmpvar_927;
    tmpvar_927.x = dot (tmpvar_917, tmpvar_917);
    tmpvar_927.y = dot (x12_915.xy, x12_915.xy);
    tmpvar_927.z = dot (tmpvar_919.zw, tmpvar_919.zw);
    vec3 tmpvar_928;
    tmpvar_928 = max ((0.5 - tmpvar_927), 0.0);
    vec3 tmpvar_929;
    tmpvar_929 = (tmpvar_928 * tmpvar_928);
    vec3 tmpvar_930;
    tmpvar_930 = ((2.0 * fract(
      ((x_926 - (floor(
        (x_926 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_931;
    tmpvar_931 = (abs(tmpvar_930) - 0.5);
    vec3 tmpvar_932;
    tmpvar_932 = (tmpvar_930 - floor((tmpvar_930 + 0.5)));
    g_914.x = ((tmpvar_932.x * tmpvar_917.x) + (tmpvar_931.x * tmpvar_917.y));
    g_914.yz = ((tmpvar_932.yz * x12_915.xz) + (tmpvar_931.yz * x12_915.yw));
    oo_911.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_929 * tmpvar_929) * (1.79284 - 
        (0.853735 * ((tmpvar_932 * tmpvar_932) + (tmpvar_931 * tmpvar_931)))
      )), g_914))
    ) - 5.5));
     vec3 tmpvar_933;
    tmpvar_933 = (pp_809 - oo_911);
    po_910.x = tmpvar_933.x;
    mat2 tmpvar_934;
    tmpvar_934[0].x = 0.995004;
    tmpvar_934[0].y = -0.0998334;
    tmpvar_934[1].x = 0.0998334;
    tmpvar_934[1].y = 0.995004;
    po_910.yz = (tmpvar_933.zy * tmpvar_934).yx;
    float t_935;
    t_935 = (xacc * 0.01);
    float tmpvar_936;
    tmpvar_936 = cos(t_935);
    float tmpvar_937;
    tmpvar_937 = sin(t_935);
    mat2 tmpvar_938;
    tmpvar_938[0].x = tmpvar_936;
    tmpvar_938[0].y = -(tmpvar_937);
    tmpvar_938[1].x = tmpvar_937;
    tmpvar_938[1].y = tmpvar_936;
    po_910.xz = (po_910.xz * tmpvar_938);
    float t_939;
    t_939 = (xacc * -0.1);
    float tmpvar_940;
    tmpvar_940 = cos(t_939);
    float tmpvar_941;
    tmpvar_941 = sin(t_939);
    mat2 tmpvar_942;
    tmpvar_942[0].x = tmpvar_940;
    tmpvar_942[0].y = -(tmpvar_941);
    tmpvar_942[1].x = tmpvar_941;
    tmpvar_942[1].y = tmpvar_940;
     vec2 tmpvar_943;
    tmpvar_943 = (po_910.yx * tmpvar_942);
    po_910.xy = tmpvar_943.yx;
    poo_909 = po_910;
     vec3 tmpvar_944;
    tmpvar_944 = (po_910 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_945;
    tmpvar_945[0].x = -0.955336;
    tmpvar_945[0].y = -0.295523;
    tmpvar_945[1].x = 0.295523;
    tmpvar_945[1].y = -0.955336;
     vec2 tmpvar_946;
    tmpvar_946 = (tmpvar_943 * tmpvar_945);
    po_910.xy = tmpvar_946.yx;
     vec3 tmpvar_947;
    tmpvar_947 = (abs(po_910) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_948;
    tmpvar_948 = max (tmpvar_947, 0.0);
    mat2 tmpvar_949;
    tmpvar_949[0].x = -0.825337;
    tmpvar_949[0].y = 0.56464;
    tmpvar_949[1].x = -0.56464;
    tmpvar_949[1].y = -0.825337;
    po_910.xy = (tmpvar_946 * tmpvar_949).yx;
     vec3 tmpvar_950;
    tmpvar_950 = (abs(po_910) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_951;
    tmpvar_951 = max (tmpvar_950, 0.0);
    mat2 tmpvar_952;
    tmpvar_952[0].x = 0.540302;
    tmpvar_952[0].y = -0.841471;
    tmpvar_952[1].x = 0.841471;
    tmpvar_952[1].y = 0.540302;
     vec2 tmpvar_953;
    tmpvar_953 = (poo_909.xz * tmpvar_952);
    poo_909.xz = tmpvar_953;
     vec3 tmpvar_954;
    tmpvar_954 = (abs(poo_909) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_955;
    tmpvar_955 = max (tmpvar_954, 0.0);
    mat2 tmpvar_956;
    tmpvar_956[0].x = -0.416147;
    tmpvar_956[0].y = 0.909297;
    tmpvar_956[1].x = -0.909297;
    tmpvar_956[1].y = -0.416147;
    poo_909.xz = (tmpvar_953 * tmpvar_956);
     vec3 tmpvar_957;
    tmpvar_957 = (abs(poo_909) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_958;
    tmpvar_958 = max (tmpvar_957, 0.0);
     vec3 tmpvar_959;
    tmpvar_959 = (abs(tmpvar_944) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_960;
    tmpvar_960 = max (tmpvar_959, 0.0);
     float tmpvar_961;
    tmpvar_961 = min (tmpvar_908, (min (
      max (max ((min (
        max (tmpvar_957.x, max (tmpvar_957.y, tmpvar_957.z))
      , 0.0) + sqrt(
        dot (tmpvar_958, tmpvar_958)
      )), (min (
        max (tmpvar_954.x, max (tmpvar_954.y, tmpvar_954.z))
      , 0.0) + sqrt(
        dot (tmpvar_955, tmpvar_955)
      ))), min ((min (
        max (tmpvar_947.x, max (tmpvar_947.y, tmpvar_947.z))
      , 0.0) + sqrt(
        dot (tmpvar_948, tmpvar_948)
      )), (min (
        max (tmpvar_950.x, max (tmpvar_950.y, tmpvar_950.z))
      , 0.0) + sqrt(
        dot (tmpvar_951, tmpvar_951)
      ))))
    , 
      (min (max (tmpvar_959.x, max (tmpvar_959.y, tmpvar_959.z)), 0.0) + sqrt(dot (tmpvar_960, tmpvar_960)))
    ) + 0.3));
     vec3 pp_962;
    pp_962 = (pp_5 - vec3(0.0, 0.0, 1.0));
     vec3 p_963;
    p_963 = pp_962;
     float tmpvar_964;
    tmpvar_964 = max (0.0, sin((pp_962.z * 0.001)));
     float tmpvar_965;
    tmpvar_965 = (1.0 - tmpvar_964);
     float tmpvar_966;
    tmpvar_966 = (pp_962.z / (1000.0 + pp_962.z));
     float tmpvar_967;
    tmpvar_967 = (1.0 - tmpvar_966);
     float tmpvar_968;
    tmpvar_968 = max (0.0, -(sin(
      (pp_962.z * 0.0004)
    )));
     float tmpvar_969;
    tmpvar_969 = (1.0 - tmpvar_968);
     vec2 v_970;
    v_970 = (pp_962.zx * 0.001);
     vec3 g_971;
     vec4 x12_972;
     vec2 tmpvar_973;
    tmpvar_973 = floor((v_970 + dot (v_970, vec2(0.366025, 0.366025))));
     vec2 tmpvar_974;
    tmpvar_974 = ((v_970 - tmpvar_973) + dot (tmpvar_973, vec2(0.211325, 0.211325)));
    vec2 tmpvar_975;
    if ((tmpvar_974.x > tmpvar_974.y)) {
      tmpvar_975 = vec2(1.0, 0.0);
    } else {
      tmpvar_975 = vec2(0.0, 1.0);
    };
     vec4 tmpvar_976;
    tmpvar_976 = (tmpvar_974.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_972.zw = tmpvar_976.zw;
    x12_972.xy = (tmpvar_976.xy - tmpvar_975);
     vec2 tmpvar_977;
    tmpvar_977 = (tmpvar_973 - (floor(
      (tmpvar_973 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_978;
    tmpvar_978.xz = vec2(0.0, 1.0);
    tmpvar_978.y = tmpvar_975.y;
     vec3 x_979;
    x_979 = (tmpvar_977.y + tmpvar_978);
     vec3 x_980;
    x_980 = (((x_979 * 34.0) + 1.0) * x_979);
    vec3 tmpvar_981;
    tmpvar_981.xz = vec2(0.0, 1.0);
    tmpvar_981.y = tmpvar_975.x;
     vec3 x_982;
    x_982 = (((x_980 - 
      (floor((x_980 * 0.00346021)) * 289.0)
    ) + tmpvar_977.x) + tmpvar_981);
     vec3 x_983;
    x_983 = (((x_982 * 34.0) + 1.0) * x_982);
     vec3 tmpvar_984;
    tmpvar_984.x = dot (tmpvar_974, tmpvar_974);
    tmpvar_984.y = dot (x12_972.xy, x12_972.xy);
    tmpvar_984.z = dot (tmpvar_976.zw, tmpvar_976.zw);
     vec3 tmpvar_985;
    tmpvar_985 = max ((0.5 - tmpvar_984), 0.0);
     vec3 tmpvar_986;
    tmpvar_986 = (tmpvar_985 * tmpvar_985);
     vec3 tmpvar_987;
    tmpvar_987 = ((2.0 * fract(
      ((x_983 - (floor(
        (x_983 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
     vec3 tmpvar_988;
    tmpvar_988 = (abs(tmpvar_987) - 0.5);
     vec3 tmpvar_989;
    tmpvar_989 = (tmpvar_987 - floor((tmpvar_987 + 0.5)));
    g_971.x = ((tmpvar_989.x * tmpvar_974.x) + (tmpvar_988.x * tmpvar_974.y));
    g_971.yz = ((tmpvar_989.yz * x12_972.xz) + (tmpvar_988.yz * x12_972.yw));
     float tmpvar_990;
    tmpvar_990 = (((2.0 * l) / (100.0 + l)) + 1.0);
     float a_991;
    a_991 = ((pp_962.z * 0.1) + sin((pp_962.x * 0.01)));
     float a_992;
    a_992 = (floor(a_991) - 1.0);
     float tmpvar_993;
    tmpvar_993 = floor(a_991);
     float a_994;
    a_994 = ((pp_962.z * 0.3) + sin((pp_962.x * 0.01)));
     float a_995;
    a_995 = (floor(a_994) - 1.0);
     float tmpvar_996;
    tmpvar_996 = floor(a_994);
     float tmpvar_997;
    tmpvar_997 = ((pp_962.y + (3900.0 * 
      dot (((tmpvar_986 * tmpvar_986) * (1.79284 - (0.853735 * 
        ((tmpvar_989 * tmpvar_989) + (tmpvar_988 * tmpvar_988))
      ))), g_971)
    )) + ((
      ((mix (fract(
        (float(mod (((a_992 * 90327.1) + 1230.0), ((sin(a_992) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_993 * 90327.1) + 1230.0), ((sin(tmpvar_993) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_991)
         * 3.14159)) * 0.5) + 0.5)
      )) * 10.0) / tmpvar_990)
     + 
      ((mix (fract(
        (float(mod (((a_995 * 90327.1) + 1230.0), ((sin(a_995) + 1.0) * 10351.0))))
      ), fract(
        (float(mod (((tmpvar_996 * 90327.1) + 1230.0), ((sin(tmpvar_996) + 1.0) * 10351.0))))
      ), (1.0 - 
        ((cos((
          fract(a_994)
         * 3.14159)) * 0.5) + 0.5)
      )) * 3.0) / tmpvar_990)
    ) - 1.5));
     float tmpvar_998;
    tmpvar_998 = min (1e+08, (tmpvar_997 + (tmpvar_964 * 300.0)));
    p_963.y = (pp_962.y + (tmpvar_997 - pp_962.y));
     vec3 v_999;
    v_999 = (p_963 * vec3(0.007, 0.004, 0.0021));
     vec3 tmpvar_1000;
    tmpvar_1000 = floor((v_999 + dot (v_999, vec3(0.333333, 0.333333, 0.333333))));
     vec3 tmpvar_1001;
    tmpvar_1001 = ((v_999 - tmpvar_1000) + dot (tmpvar_1000, vec3(0.166667, 0.166667, 0.166667)));
     vec3 tmpvar_1002;
    tmpvar_1002.x = float((tmpvar_1001.x >= tmpvar_1001.y));
    tmpvar_1002.y = float((tmpvar_1001.y >= tmpvar_1001.z));
    tmpvar_1002.z = float((tmpvar_1001.z >= tmpvar_1001.x));
     vec3 tmpvar_1003;
    tmpvar_1003 = (1.0 - tmpvar_1002);
     vec3 tmpvar_1004;
    tmpvar_1004 = min (tmpvar_1002, tmpvar_1003.zxy);
     vec3 tmpvar_1005;
    tmpvar_1005 = max (tmpvar_1002, tmpvar_1003.zxy);
     vec3 tmpvar_1006;
    tmpvar_1006 = ((tmpvar_1001 - tmpvar_1004) + vec3(0.166667, 0.166667, 0.166667));
     vec3 tmpvar_1007;
    tmpvar_1007 = ((tmpvar_1001 - tmpvar_1005) + vec3(0.333333, 0.333333, 0.333333));
     vec3 tmpvar_1008;
    tmpvar_1008 = (tmpvar_1001 - vec3(0.5, 0.5, 0.5));
     vec3 tmpvar_1009;
    tmpvar_1009 = (tmpvar_1000 - (floor(
      (tmpvar_1000 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_1010;
    tmpvar_1010.xw = vec2(0.0, 1.0);
    tmpvar_1010.y = tmpvar_1004.z;
    tmpvar_1010.z = tmpvar_1005.z;
     vec4 x_1011;
    x_1011 = (tmpvar_1009.z + tmpvar_1010);
     vec4 x_1012;
    x_1012 = (((x_1011 * 34.0) + 1.0) * x_1011);
     vec4 tmpvar_1013;
    tmpvar_1013.xw = vec2(0.0, 1.0);
    tmpvar_1013.y = tmpvar_1004.y;
    tmpvar_1013.z = tmpvar_1005.y;
     vec4 x_1014;
    x_1014 = (((x_1012 - 
      (floor((x_1012 * 0.00346021)) * 289.0)
    ) + tmpvar_1009.y) + tmpvar_1013);
     vec4 x_1015;
    x_1015 = (((x_1014 * 34.0) + 1.0) * x_1014);
     vec4 tmpvar_1016;
    tmpvar_1016.xw = vec2(0.0, 1.0);
    tmpvar_1016.y = tmpvar_1004.x;
    tmpvar_1016.z = tmpvar_1005.x;
     vec4 x_1017;
    x_1017 = (((x_1015 - 
      (floor((x_1015 * 0.00346021)) * 289.0)
    ) + tmpvar_1009.x) + tmpvar_1016);
     vec4 tmpvar_1018;
     vec4 x_1019;
    x_1019 = (((x_1017 * 34.0) + 1.0) * x_1017);
    tmpvar_1018 = (x_1019 - (floor(
      (x_1019 * 0.00346021)
    ) * 289.0));
     vec4 tmpvar_1020;
    tmpvar_1020 = (tmpvar_1018 - (49.0 * floor(
      (0.0204082 * tmpvar_1018)
    )));
     vec4 tmpvar_1021;
    tmpvar_1021 = floor((tmpvar_1020 * 0.142857));
     vec4 tmpvar_1022;
    tmpvar_1022 = ((tmpvar_1021 * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_1023;
    tmpvar_1023 = ((floor(
      (tmpvar_1020 - (7.0 * tmpvar_1021))
    ) * 0.285714) + vec4(-0.928571, -0.928571, -0.928571, -0.928571));
     vec4 tmpvar_1024;
    tmpvar_1024 = ((1.0 - abs(tmpvar_1022)) - abs(tmpvar_1023));
     vec4 tmpvar_1025;
    tmpvar_1025.xy = tmpvar_1022.xy;
    tmpvar_1025.zw = tmpvar_1023.xy;
     vec4 tmpvar_1026;
    tmpvar_1026.xy = tmpvar_1022.zw;
    tmpvar_1026.zw = tmpvar_1023.zw;
     vec4 tmpvar_1027;
    tmpvar_1027 = -(vec4(greaterThanEqual (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_1024)));
     vec4 tmpvar_1028;
    tmpvar_1028 = (tmpvar_1025.xzyw + ((
      (floor(tmpvar_1025) * 2.0)
     + 1.0).xzyw * tmpvar_1027.xxyy));
     vec4 tmpvar_1029;
    tmpvar_1029 = (tmpvar_1026.xzyw + ((
      (floor(tmpvar_1026) * 2.0)
     + 1.0).xzyw * tmpvar_1027.zzww));
     vec3 tmpvar_1030;
    tmpvar_1030.xy = tmpvar_1028.xy;
    tmpvar_1030.z = tmpvar_1024.x;
     vec3 tmpvar_1031;
    tmpvar_1031.xy = tmpvar_1028.zw;
    tmpvar_1031.z = tmpvar_1024.y;
     vec3 tmpvar_1032;
    tmpvar_1032.xy = tmpvar_1029.xy;
    tmpvar_1032.z = tmpvar_1024.z;
     vec3 tmpvar_1033;
    tmpvar_1033.xy = tmpvar_1029.zw;
    tmpvar_1033.z = tmpvar_1024.w;
     vec4 tmpvar_1034;
    tmpvar_1034.x = dot (tmpvar_1030, tmpvar_1030);
    tmpvar_1034.y = dot (tmpvar_1031, tmpvar_1031);
    tmpvar_1034.z = dot (tmpvar_1032, tmpvar_1032);
    tmpvar_1034.w = dot (tmpvar_1033, tmpvar_1033);
     vec4 tmpvar_1035;
    tmpvar_1035 = (1.79284 - (0.853735 * tmpvar_1034));
     vec4 tmpvar_1036;
    tmpvar_1036.x = dot (tmpvar_1001, tmpvar_1001);
    tmpvar_1036.y = dot (tmpvar_1006, tmpvar_1006);
    tmpvar_1036.z = dot (tmpvar_1007, tmpvar_1007);
    tmpvar_1036.w = dot (tmpvar_1008, tmpvar_1008);
     vec4 tmpvar_1037;
    tmpvar_1037 = max ((0.6 - tmpvar_1036), 0.0);
     vec4 tmpvar_1038;
    tmpvar_1038 = (tmpvar_1037 * tmpvar_1037);
     vec4 tmpvar_1039;
    tmpvar_1039.x = dot ((tmpvar_1030 * tmpvar_1035.x), tmpvar_1001);
    tmpvar_1039.y = dot ((tmpvar_1031 * tmpvar_1035.y), tmpvar_1006);
    tmpvar_1039.z = dot ((tmpvar_1032 * tmpvar_1035.z), tmpvar_1007);
    tmpvar_1039.w = dot ((tmpvar_1033 * tmpvar_1035.w), tmpvar_1008);
     float b_1040;
    b_1040 = ((0.45 * (
      ((((4200.0 * 
        dot ((tmpvar_1038 * tmpvar_1038), tmpvar_1039)
      ) - (
        sqrt(dot (p_963.xy, p_963.xy))
       * 0.3)) + (tmpvar_964 * 100.0)) + 80.0)
     + 
      max ((150.0 - (pp_962.z * 0.1)), 0.0)
    )) + (tmpvar_968 * 100.0));
     float tmpvar_1041;
    tmpvar_1041 = clamp ((0.5 + (
      (0.5 * (b_1040 - tmpvar_998))
     / 1.01)), 0.0, 1.0);
    p_963.y = pp_962.y;
    p_963.x = (pp_962.x + ((
      sin((pp_962.z * 0.005))
     * 50.0) * tmpvar_966));
     float t_1042;
    t_1042 = (floor((pp_962.z / 50.0)) * 0.25);
     float tmpvar_1043;
    tmpvar_1043 = cos(t_1042);
     float tmpvar_1044;
    tmpvar_1044 = sin(t_1042);
     mat2 tmpvar_1045;
    tmpvar_1045[0].x = tmpvar_1043;
    tmpvar_1045[0].y = -(tmpvar_1044);
    tmpvar_1045[1].x = tmpvar_1044;
    tmpvar_1045[1].y = tmpvar_1043;
     vec2 tmpvar_1046;
    tmpvar_1046 = (p_963.xy * tmpvar_1045);
    p_963.z = ((float(mod (pp_962.z, 50.0))) - 25.0);
    p_963.xy = (((vec2(mod (tmpvar_1046, 
      (200.0 + (tmpvar_965 * 400.0))
    ))) - 100.0) - (tmpvar_965 * 200.0));
     float tmpvar_1047;
    tmpvar_1047 = min (min ((
      mix (b_1040, tmpvar_998, tmpvar_1041)
     - 
      ((1.01 * tmpvar_1041) * (1.0 - tmpvar_1041))
    ), (
      (sqrt(dot (p_963.xz, p_963.xz)) - ((10.0 - (tmpvar_965 * 16.0)) - (tmpvar_967 * 16.0)))
     + 
      (tmpvar_968 * 100.0)
    )), ((
      sqrt(dot (p_963.yz, p_963.yz))
     - 
      ((10.0 - (tmpvar_965 * 16.0)) - (tmpvar_967 * 16.0))
    ) + (tmpvar_968 * 100.0)));
     vec3 tmpvar_1048;
    tmpvar_1048 = (pp_962 - o);
    p_963.yz = tmpvar_1048.yz;
    p_963.x = (tmpvar_1048.x + (sin(
      (pp_962.z * 0.003)
    ) * 100.0));
     float t_1049;
    t_1049 = (sin((pp_962.z * 0.005)) * 0.3);
     float tmpvar_1050;
    tmpvar_1050 = cos(t_1049);
     float tmpvar_1051;
    tmpvar_1051 = sin(t_1049);
     mat2 tmpvar_1052;
    tmpvar_1052[0].x = tmpvar_1050;
    tmpvar_1052[0].y = -(tmpvar_1051);
    tmpvar_1052[1].x = tmpvar_1051;
    tmpvar_1052[1].y = tmpvar_1050;
    p_963.xz = (p_963.xz * tmpvar_1052);
     vec3 tmpvar_1053;
    tmpvar_1053 = (p_963 + o);
    p_963.y = tmpvar_1053.y;
    p_963.xz = ((vec2(mod (tmpvar_1053.xz, 200.0))) - 100.0);
     float t_1054;
    t_1054 = (sin((p_963.z * 0.01)) * 0.3);
     float tmpvar_1055;
    tmpvar_1055 = cos(t_1054);
     float tmpvar_1056;
    tmpvar_1056 = sin(t_1054);
     mat2 tmpvar_1057;
    tmpvar_1057[0].x = tmpvar_1055;
    tmpvar_1057[0].y = -(tmpvar_1056);
    tmpvar_1057[1].x = tmpvar_1056;
    tmpvar_1057[1].y = tmpvar_1055;
    p_963.yz = (p_963.zy * tmpvar_1057).yx;
     vec3 tmpvar_1058;
    tmpvar_1058.y = 500.0;
    tmpvar_1058.x = (30.0 - (tmpvar_969 * 100.0));
    tmpvar_1058.z = (10.0 - (tmpvar_969 * 100.0));
     vec3 tmpvar_1059;
    tmpvar_1059 = (abs(p_963) - tmpvar_1058);
     vec3 tmpvar_1060;
    tmpvar_1060 = max (tmpvar_1059, 0.0);
     float tmpvar_1061;
    tmpvar_1061 = min (tmpvar_1047, ((tmpvar_969 * 100.0) + (
      min (max (tmpvar_1059.x, max (tmpvar_1059.y, tmpvar_1059.z)), 0.0)
     + 
      sqrt(dot (tmpvar_1060, tmpvar_1060))
    )));
     vec3 poo_1062;
     vec3 po_1063;
    vec3 oo_1064;
    vec3 tmpvar_1065;
    tmpvar_1065.y = 7.3;
    tmpvar_1065.x = xpos;
    tmpvar_1065.z = (((t * 150.0) + (t * t)) + 4.0);
    oo_1064 = tmpvar_1065;
    vec2 v_1066;
    v_1066 = (tmpvar_1065.zx * 0.001);
    vec3 g_1067;
    vec4 x12_1068;
    vec2 tmpvar_1069;
    tmpvar_1069 = floor((v_1066 + dot (v_1066, vec2(0.366025, 0.366025))));
    vec2 tmpvar_1070;
    tmpvar_1070 = ((v_1066 - tmpvar_1069) + dot (tmpvar_1069, vec2(0.211325, 0.211325)));
    vec2 tmpvar_1071;
    if ((tmpvar_1070.x > tmpvar_1070.y)) {
      tmpvar_1071 = vec2(1.0, 0.0);
    } else {
      tmpvar_1071 = vec2(0.0, 1.0);
    };
    vec4 tmpvar_1072;
    tmpvar_1072 = (tmpvar_1070.xyxy + vec4(0.211325, 0.211325, -0.57735, -0.57735));
    x12_1068.zw = tmpvar_1072.zw;
    x12_1068.xy = (tmpvar_1072.xy - tmpvar_1071);
    vec2 tmpvar_1073;
    tmpvar_1073 = (tmpvar_1069 - (floor(
      (tmpvar_1069 * 0.00346021)
    ) * 289.0));
    vec3 tmpvar_1074;
    tmpvar_1074.xz = vec2(0.0, 1.0);
    tmpvar_1074.y = tmpvar_1071.y;
    vec3 x_1075;
    x_1075 = (tmpvar_1073.y + tmpvar_1074);
    vec3 x_1076;
    x_1076 = (((x_1075 * 34.0) + 1.0) * x_1075);
    vec3 tmpvar_1077;
    tmpvar_1077.xz = vec2(0.0, 1.0);
    tmpvar_1077.y = tmpvar_1071.x;
    vec3 x_1078;
    x_1078 = (((x_1076 - 
      (floor((x_1076 * 0.00346021)) * 289.0)
    ) + tmpvar_1073.x) + tmpvar_1077);
    vec3 x_1079;
    x_1079 = (((x_1078 * 34.0) + 1.0) * x_1078);
    vec3 tmpvar_1080;
    tmpvar_1080.x = dot (tmpvar_1070, tmpvar_1070);
    tmpvar_1080.y = dot (x12_1068.xy, x12_1068.xy);
    tmpvar_1080.z = dot (tmpvar_1072.zw, tmpvar_1072.zw);
    vec3 tmpvar_1081;
    tmpvar_1081 = max ((0.5 - tmpvar_1080), 0.0);
    vec3 tmpvar_1082;
    tmpvar_1082 = (tmpvar_1081 * tmpvar_1081);
    vec3 tmpvar_1083;
    tmpvar_1083 = ((2.0 * fract(
      ((x_1079 - (floor(
        (x_1079 * 0.00346021)
      ) * 289.0)) * vec3(0.0243902, 0.0243902, 0.0243902))
    )) - 1.0);
    vec3 tmpvar_1084;
    tmpvar_1084 = (abs(tmpvar_1083) - 0.5);
    vec3 tmpvar_1085;
    tmpvar_1085 = (tmpvar_1083 - floor((tmpvar_1083 + 0.5)));
    g_1067.x = ((tmpvar_1085.x * tmpvar_1070.x) + (tmpvar_1084.x * tmpvar_1070.y));
    g_1067.yz = ((tmpvar_1085.yz * x12_1068.xz) + (tmpvar_1084.yz * x12_1068.yw));
    oo_1064.y = (7.3 - ((7.3 + 
      (3900.0 * dot (((tmpvar_1082 * tmpvar_1082) * (1.79284 - 
        (0.853735 * ((tmpvar_1085 * tmpvar_1085) + (tmpvar_1084 * tmpvar_1084)))
      )), g_1067))
    ) - 5.5));
     vec3 tmpvar_1086;
    tmpvar_1086 = (pp_962 - oo_1064);
    po_1063.x = tmpvar_1086.x;
    mat2 tmpvar_1087;
    tmpvar_1087[0].x = 0.995004;
    tmpvar_1087[0].y = -0.0998334;
    tmpvar_1087[1].x = 0.0998334;
    tmpvar_1087[1].y = 0.995004;
    po_1063.yz = (tmpvar_1086.zy * tmpvar_1087).yx;
    float t_1088;
    t_1088 = (xacc * 0.01);
    float tmpvar_1089;
    tmpvar_1089 = cos(t_1088);
    float tmpvar_1090;
    tmpvar_1090 = sin(t_1088);
    mat2 tmpvar_1091;
    tmpvar_1091[0].x = tmpvar_1089;
    tmpvar_1091[0].y = -(tmpvar_1090);
    tmpvar_1091[1].x = tmpvar_1090;
    tmpvar_1091[1].y = tmpvar_1089;
    po_1063.xz = (po_1063.xz * tmpvar_1091);
    float t_1092;
    t_1092 = (xacc * -0.1);
    float tmpvar_1093;
    tmpvar_1093 = cos(t_1092);
    float tmpvar_1094;
    tmpvar_1094 = sin(t_1092);
    mat2 tmpvar_1095;
    tmpvar_1095[0].x = tmpvar_1093;
    tmpvar_1095[0].y = -(tmpvar_1094);
    tmpvar_1095[1].x = tmpvar_1094;
    tmpvar_1095[1].y = tmpvar_1093;
     vec2 tmpvar_1096;
    tmpvar_1096 = (po_1063.yx * tmpvar_1095);
    po_1063.xy = tmpvar_1096.yx;
    poo_1062 = po_1063;
     vec3 tmpvar_1097;
    tmpvar_1097 = (po_1063 + vec3(0.0, 0.0, -2.0));
    mat2 tmpvar_1098;
    tmpvar_1098[0].x = -0.955336;
    tmpvar_1098[0].y = -0.295523;
    tmpvar_1098[1].x = 0.295523;
    tmpvar_1098[1].y = -0.955336;
     vec2 tmpvar_1099;
    tmpvar_1099 = (tmpvar_1096 * tmpvar_1098);
    po_1063.xy = tmpvar_1099.yx;
     vec3 tmpvar_1100;
    tmpvar_1100 = (abs(po_1063) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_1101;
    tmpvar_1101 = max (tmpvar_1100, 0.0);
    mat2 tmpvar_1102;
    tmpvar_1102[0].x = -0.825337;
    tmpvar_1102[0].y = 0.56464;
    tmpvar_1102[1].x = -0.56464;
    tmpvar_1102[1].y = -0.825337;
    po_1063.xy = (tmpvar_1099 * tmpvar_1102).yx;
     vec3 tmpvar_1103;
    tmpvar_1103 = (abs(po_1063) - vec3(2.0, 0.3, 3.0));
     vec3 tmpvar_1104;
    tmpvar_1104 = max (tmpvar_1103, 0.0);
    mat2 tmpvar_1105;
    tmpvar_1105[0].x = 0.540302;
    tmpvar_1105[0].y = -0.841471;
    tmpvar_1105[1].x = 0.841471;
    tmpvar_1105[1].y = 0.540302;
     vec2 tmpvar_1106;
    tmpvar_1106 = (poo_1062.xz * tmpvar_1105);
    poo_1062.xz = tmpvar_1106;
     vec3 tmpvar_1107;
    tmpvar_1107 = (abs(poo_1062) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_1108;
    tmpvar_1108 = max (tmpvar_1107, 0.0);
    mat2 tmpvar_1109;
    tmpvar_1109[0].x = -0.416147;
    tmpvar_1109[0].y = 0.909297;
    tmpvar_1109[1].x = -0.909297;
    tmpvar_1109[1].y = -0.416147;
    poo_1062.xz = (tmpvar_1106 * tmpvar_1109);
     vec3 tmpvar_1110;
    tmpvar_1110 = (abs(poo_1062) - vec3(0.9, 1.0, 3.3));
     vec3 tmpvar_1111;
    tmpvar_1111 = max (tmpvar_1110, 0.0);
     vec3 tmpvar_1112;
    tmpvar_1112 = (abs(tmpvar_1097) - vec3(0.4, 0.4, 2.0));
     vec3 tmpvar_1113;
    tmpvar_1113 = max (tmpvar_1112, 0.0);
     vec3 tmpvar_1114;
    tmpvar_1114.x = (tmpvar_349 - tmpvar_502);
    tmpvar_1114.y = (tmpvar_655 - tmpvar_808);
    tmpvar_1114.z = (tmpvar_961 - min (tmpvar_1061, (
      min (max (max ((
        min (max (tmpvar_1110.x, max (tmpvar_1110.y, tmpvar_1110.z)), 0.0)
       + 
        sqrt(dot (tmpvar_1111, tmpvar_1111))
      ), (
        min (max (tmpvar_1107.x, max (tmpvar_1107.y, tmpvar_1107.z)), 0.0)
       + 
        sqrt(dot (tmpvar_1108, tmpvar_1108))
      )), min ((
        min (max (tmpvar_1100.x, max (tmpvar_1100.y, tmpvar_1100.z)), 0.0)
       + 
        sqrt(dot (tmpvar_1101, tmpvar_1101))
      ), (
        min (max (tmpvar_1103.x, max (tmpvar_1103.y, tmpvar_1103.z)), 0.0)
       + 
        sqrt(dot (tmpvar_1104, tmpvar_1104))
      ))), (min (max (tmpvar_1112.x, 
        max (tmpvar_1112.y, tmpvar_1112.z)
      ), 0.0) + sqrt(dot (tmpvar_1113, tmpvar_1113))))
     + 0.3)));
    vec3 tmpvar_1115;
    tmpvar_1115.z = -3.0;
    tmpvar_1115.x = sin(t);
    tmpvar_1115.y = cos(t);
     float tmpvar_1116;
    tmpvar_1116 = dot (normalize(tmpvar_1114), normalize(tmpvar_1115));
    gl_FragColor.xyz = mix (vec3(tmpvar_1116), vec3(0.0, 0.0, 0.0), ml_2);
  };
   float tmpvar_1117;
  tmpvar_1117 = (dot (gl_FragColor.xyz, vec3(0.21, 0.72, 0.07)) + max (0.0, (1.5 - t)));
   float a_1118;
  a_1118 = ((t + (tmpvar_23.x * 900.0)) + 10000.5);
   float tmpvar_1119;
  tmpvar_1119 = fract((float(mod ((
    (a_1118 * 90327.1)
   + 1230.0), (
    (sin(a_1118) + 1.0)
   * 10351.0)))));
   float a_1120;
  a_1120 = ((t + (tmpvar_23.y * 900.0)) + 10000.0);
   float tmpvar_1121;
  tmpvar_1121 = fract((float(mod ((
    (a_1120 * 90327.1)
   + 1230.0), (
    (sin(a_1120) + 1.0)
   * 10351.0)))));
  float tmpvar_1122;
  tmpvar_1122 = ((float(mod (floor(
    (t * 0.15)
  ), 2.0))) * 0.66);
   vec3 tmpvar_1123;
  tmpvar_1123 = (((
    clamp ((abs((
      (fract((vec3(1.33, 0.996667, 0.663333) + tmpvar_1122)) * 6.0)
     - 3.0)) - 1.0), 0.0, 1.0)
   - 1.0) * tmpvar_1121) + tmpvar_1121);
   vec3 tmpvar_1124;
  tmpvar_1124 = (((
    clamp ((abs((
      (fract((vec3(1.66, 1.32667, 0.993333) + tmpvar_1122)) * 6.0)
     - 3.0)) - 1.0), 0.0, 1.0)
   - 1.0) * tmpvar_1119) + tmpvar_1119);
  gl_FragColor.xyz = (((
    ((clamp ((
      abs(((fract(
        (tmpvar_1122 + vec3(1.0, 0.666667, 0.333333))
      ) * 6.0) - 3.0))
     - 1.0), 0.0, 1.0) - 1.0) * tmpvar_1117)
   + tmpvar_1117) + tmpvar_1123) + tmpvar_1124);
}


