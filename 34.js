parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    jbf7: [
      function (require, module, exports) {
        var e = window.unlayer.React,
          t = function (t) {
            t.label;
            var l = t.value,
              o = t.updateValue;
            t.data;
            return e.createElement(
              "div",
              null,
              e.createElement("div", null, "My React Color Picker"),
              e.createElement("input", {
                class: "color-value",
                defaultValue: l,
                onChange: function (e) {
                  return o(e.target.value);
                },
              }),
              e.createElement(
                "button",
                {
                  class: "red",
                  onClick: function () {
                    return o("#f00");
                  },
                },
                "Red"
              ),
              e.createElement(
                "button",
                {
                  class: "green",
                  onClick: function () {
                    return o("#0f0");
                  },
                },
                "Green"
              ),
              e.createElement(
                "button",
                {
                  class: "blue",
                  onClick: function () {
                    return o("#00f");
                  },
                },
                "Blue"
              )
            );
          };
        var html = `<div style='margin:0;padding:24px 0 12px' align='center'><div style='display:block'><img height='168px'  src='https://ci6.googleusercontent.com/proxy/E1hMtlo0udSQ82S3Y1nUfh1u_JpU3Y1txyjIfuBn8UeJoy1GdUb4A4oKYwJ3FXxSFcikclLcc-OsSoeD1Ff2_fg5RmPEoirLUd-FH5A3Gkj2KmPyJ-6chC9de5jYEJjKpxNxl_20K_3p3kPa1Cga9xJ0DOni_A=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0386/5834/3052/products/FE_HeroImage-2e6e78app-1.png?v=1613453692' style='display:block;margin:auto;padding-top:8px'style=' opacity: 0.01; left: 526.5px; top: 1232px;' tabindex='0'></div><div style='display:block;font-size:24px;line-height:28px' >My Product Name</div><div style='display:block' ><a href='https://click.pstmrk.it/2sm/allbeing.co%2Fproducts%2Ffe%3Fjudgeme_review_source%3DZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnFkV1JuWlcxbFgzSmxkbWxsZDE5emIzVnlZMlVpT2lKdGRXeDBhUzF5WlhacFpYY2lmUS5kRS0yak9ub2IwZTdFRC1nam1MNWJpdWhpNk5UUW5jTm96OEJrQXRFS3Mw%26judgeme_token%3Dd62ec6f4-4747-4256-a052-95d42bdfd923--9kl14lyj%26utm_campaign%3Djudgeme-review-request%26utm_medium%3Demail%26utm_source%3Djudgeme/XhqPpyAN/aXAc/y8UyM8YEf_/ZXhhbXBsZV9uZXdfcnJlX2VtYWls' class='redirect_button' target='_blank' >Review now</a> </div></div>`;
        unlayer.registerPropertyEditor({ name: "my_color_picker", Widget: t });
        var l = function (t) {
          var l = t.values;
          return e.createElement(
            "div",
            { style: { color: l.textColor } },
            html
          );
        };
        const CustomViewer = () => {
          return e.createViewer({
            render(values) {
              return `<div>I am a custom tool.</div>`;
            },
          });
        };
        unlayer.registerTool({
          name: "Products",
          label: " Products",
          icon: "fa-smile",
          supportedDisplayModes: ["web", "email"],
          usageLimit: 1,
          options: {
            default: { title: null },
            text: {
              title: "Text",
              position: 1,
              options: {
                textColor: {
                  label: "Color",
                  defaultValue: "#ff0000",
                  widget: "my_color_picker",
                },
              },
            },
          },
          values: {},
          renderer: {
            Viewer: unlayer.createViewer({
              render(values) {
                return html;
              },
            }),
            exporters: {
              web: function (e) {
                return "<div>I am a custom  voollllllllllllll 1 tool.</div>";
              },
              email: function (e) {
                return "<div>I am a custom22222222222222222 tool.</div>";
              },
            },
            head: {
              css: function (e) {},
              js: function (e) {
                console.log("this is tool custom js");
              },
            },
          },
        });
      },
      {},
    ],
  },
  {},
  ["jbf7"],
  null
);
//# sourceMappingURL=/custom.js.map
