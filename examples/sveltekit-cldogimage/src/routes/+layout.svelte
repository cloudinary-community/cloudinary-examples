<script>
  import { setContext } from "svelte"
  import "./styles.css"

  setContext("posts", [
    {
      title: "Exploring expensive cars",
      slug: "/blog/first-post",
      tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://images.unsplash.com/photo-1700135676740-d1325cfe4230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
        image_id: 'demo/car',
        image_alt: "Car in desert",
      created_at: "20th June, 2023",
      html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat quam eget porta sodales. Sed rhoncus ut eros sed fringilla. Quisque augue nulla, suscipit ut erat et, ornare mattis massa. Duis sed justo eu justo finibus pharetra eu vitae nunc. Phasellus congue pulvinar turpis a rutrum. Suspendisse vehicula purus eros, euismod volutpat lacus blandit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi blandit porttitor lacus, eu laoreet tortor laoreet sit amet. Quisque sed turpis eget erat pulvinar elementum eget et erat. Praesent non aliquet metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam, quam a vulputate lacinia, eros erat vulputate sem, nec porta lacus dolor dignissim velit. Fusce dictum in odio sit amet elementum.</p>
        <p>Phasellus ullamcorper neque vitae porta porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris imperdiet dictum quam, pharetra facilisis orci euismod ut. Vivamus quis luctus ex. Nam sit amet commodo quam. Fusce molestie enim eu mauris semper tincidunt. In suscipit suscipit imperdiet. Ut tempor gravida est, vel tristique metus auctor et. Aenean rhoncus at felis et dictum. In hac habitasse platea dictumst. Nullam imperdiet turpis quis purus sodales iaculis. Nullam eu nisl posuere, egestas nisl id, condimentum ante. Quisque vitae sodales nulla, eu ornare leo.</p>

        <h2>Tempus Eros</h2>
        <p>Maecenas tellus est, euismod tempus eros sagittis, tristique hendrerit quam. Fusce varius auctor risus. Aenean tempus turpis sem, et dictum turpis condimentum at. Ut risus arcu, hendrerit viverra ante ac, tincidunt euismod ligula. Nullam in ultricies quam. Proin sollicitudin nisi a congue blandit. Ut non ex tristique sem fringilla commodo et in ante. Aenean rutrum massa sed felis blandit, et suscipit leo faucibus. Phasellus quis rhoncus justo. Proin in diam mattis, dictum lectus et, finibus sem. Sed nec orci nibh. Etiam aliquet odio sit amet egestas eleifend. Vestibulum pellentesque ante et euismod sodales.</p>
        <p>Nunc tempus gravida lacinia. Donec eget vestibulum justo, et pellentesque velit. Ut gravida risus semper ligula rhoncus, vel dictum odio venenatis. Fusce eros sem, efficitur vitae pellentesque at, vestibulum at nunc. Phasellus finibus placerat purus ac vehicula. Aliquam mollis, augue a pulvinar scelerisque, quam nunc commodo augue, nec commodo ante metus nec eros. Suspendisse nec porta quam. Nullam dapibus elementum consectetur. Proin scelerisque sem semper scelerisque suscipit. Suspendisse sit amet consequat ligula, vel rutrum lectus. Sed accumsan dui sit amet tristique cursus. Proin cursus ultrices nulla.</p>
        <p>Nulla vel tristique diam. Morbi congue diam risus, sit amet maximus sem fringilla nec. Donec condimentum metus neque, nec vestibulum ipsum pharetra a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at elementum erat. Fusce vulputate consequat consectetur. Aliquam non enim ac lacus ultrices venenatis.</p>
      `
    },
    {
      title: "Buildings & Waters",
      slug: "/blog/second-post",
      tagline: "Morbi congue diam risus, sit amet maximus",
      image:
        "https://images.unsplash.com/photo-1699563070885-8e955e11735b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
      created_at: "2nd Feb, 2023",
      image_id: 'demo/boat',
      image_alt: "Boat riding on waters between buildings",

      html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat quam eget porta sodales. Sed rhoncus ut eros sed fringilla. Quisque augue nulla, suscipit ut erat et, ornare mattis massa. Duis sed justo eu justo finibus pharetra eu vitae nunc. Phasellus congue pulvinar turpis a rutrum. Suspendisse vehicula purus eros, euismod volutpat lacus blandit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi blandit porttitor lacus, eu laoreet tortor laoreet sit amet. Quisque sed turpis eget erat pulvinar elementum eget et erat. Praesent non aliquet metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam, quam a vulputate lacinia, eros erat vulputate sem, nec porta lacus dolor dignissim velit. Fusce dictum in odio sit amet elementum.</p>
        <p>Phasellus ullamcorper neque vitae porta porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris imperdiet dictum quam, pharetra facilisis orci euismod ut. Vivamus quis luctus ex. Nam sit amet commodo quam. Fusce molestie enim eu mauris semper tincidunt. In suscipit suscipit imperdiet. Ut tempor gravida est, vel tristique metus auctor et. Aenean rhoncus at felis et dictum. In hac habitasse platea dictumst. Nullam imperdiet turpis quis purus sodales iaculis. Nullam eu nisl posuere, egestas nisl id, condimentum ante. Quisque vitae sodales nulla, eu ornare leo.</p>

        <h2>Tempus Eros</h2>
        <p>Maecenas tellus est, euismod tempus eros sagittis, tristique hendrerit quam. Fusce varius auctor risus. Aenean tempus turpis sem, et dictum turpis condimentum at. Ut risus arcu, hendrerit viverra ante ac, tincidunt euismod ligula. Nullam in ultricies quam. Proin sollicitudin nisi a congue blandit. Ut non ex tristique sem fringilla commodo et in ante. Aenean rutrum massa sed felis blandit, et suscipit leo faucibus. Phasellus quis rhoncus justo. Proin in diam mattis, dictum lectus et, finibus sem. Sed nec orci nibh. Etiam aliquet odio sit amet egestas eleifend. Vestibulum pellentesque ante et euismod sodales.</p>
        <p>Nunc tempus gravida lacinia. Donec eget vestibulum justo, et pellentesque velit. Ut gravida risus semper ligula rhoncus, vel dictum odio venenatis. Fusce eros sem, efficitur vitae pellentesque at, vestibulum at nunc. Phasellus finibus placerat purus ac vehicula. Aliquam mollis, augue a pulvinar scelerisque, quam nunc commodo augue, nec commodo ante metus nec eros. Suspendisse nec porta quam. Nullam dapibus elementum consectetur. Proin scelerisque sem semper scelerisque suscipit. Suspendisse sit amet consequat ligula, vel rutrum lectus. Sed accumsan dui sit amet tristique cursus. Proin cursus ultrices nulla.</p>
        <p>Nulla vel tristique diam. Morbi congue diam risus, sit amet maximus sem fringilla nec. Donec condimentum metus neque, nec vestibulum ipsum pharetra a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at elementum erat. Fusce vulputate consequat consectetur. Aliquam non enim ac lacus ultrices venenatis.</p>
      `
    },
    {
      title: "Walking on water",
      slug: "/blog/third-post",
      tagline: "Phasellus ullamcorper neque vitae porta porttitor",
      image:
        "https://images.unsplash.com/photo-1682685796775-020fd5dcd7d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
      created_at: "10th Mar, 2022",
      image_id: 'demo/buildings',
      image_alt: "Talk buildings with few people walking between",

      html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat quam eget porta sodales. Sed rhoncus ut eros sed fringilla. Quisque augue nulla, suscipit ut erat et, ornare mattis massa. Duis sed justo eu justo finibus pharetra eu vitae nunc. Phasellus congue pulvinar turpis a rutrum. Suspendisse vehicula purus eros, euismod volutpat lacus blandit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi blandit porttitor lacus, eu laoreet tortor laoreet sit amet. Quisque sed turpis eget erat pulvinar elementum eget et erat. Praesent non aliquet metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam, quam a vulputate lacinia, eros erat vulputate sem, nec porta lacus dolor dignissim velit. Fusce dictum in odio sit amet elementum.</p>
        <p>Phasellus ullamcorper neque vitae porta porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris imperdiet dictum quam, pharetra facilisis orci euismod ut. Vivamus quis luctus ex. Nam sit amet commodo quam. Fusce molestie enim eu mauris semper tincidunt. In suscipit suscipit imperdiet. Ut tempor gravida est, vel tristique metus auctor et. Aenean rhoncus at felis et dictum. In hac habitasse platea dictumst. Nullam imperdiet turpis quis purus sodales iaculis. Nullam eu nisl posuere, egestas nisl id, condimentum ante. Quisque vitae sodales nulla, eu ornare leo.</p>

        <h2>Tempus Eros</h2>
        <p>Maecenas tellus est, euismod tempus eros sagittis, tristique hendrerit quam. Fusce varius auctor risus. Aenean tempus turpis sem, et dictum turpis condimentum at. Ut risus arcu, hendrerit viverra ante ac, tincidunt euismod ligula. Nullam in ultricies quam. Proin sollicitudin nisi a congue blandit. Ut non ex tristique sem fringilla commodo et in ante. Aenean rutrum massa sed felis blandit, et suscipit leo faucibus. Phasellus quis rhoncus justo. Proin in diam mattis, dictum lectus et, finibus sem. Sed nec orci nibh. Etiam aliquet odio sit amet egestas eleifend. Vestibulum pellentesque ante et euismod sodales.</p>
        <img src='https://images.unsplash.com/photo-1699155758832-a80cdffc17e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D' />
        <p>Nunc tempus gravida lacinia. Donec eget vestibulum justo, et pellentesque velit. Ut gravida risus semper ligula rhoncus, vel dictum odio venenatis. Fusce eros sem, efficitur vitae pellentesque at, vestibulum at nunc. Phasellus finibus placerat purus ac vehicula. Aliquam mollis, augue a pulvinar scelerisque, quam nunc commodo augue, nec commodo ante metus nec eros. Suspendisse nec porta quam. Nullam dapibus elementum consectetur. Proin scelerisque sem semper scelerisque suscipit. Suspendisse sit amet consequat ligula, vel rutrum lectus. Sed accumsan dui sit amet tristique cursus. Proin cursus ultrices nulla.</p>
        <p>Nulla vel tristique diam. Morbi congue diam risus, sit amet maximus sem fringilla nec. Donec condimentum metus neque, nec vestibulum ipsum pharetra a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at elementum erat. Fusce vulputate consequat consectetur. Aliquam non enim ac lacus ultrices venenatis.</p>
      `
    },
    {
      title: "A beautiful nature site",
      slug: "/blog/first-blog",
      tagline: "Maecenas tellus est, euismod tempus eros sagittis, tristique hendrerit quam",
      image:
        "https://images.unsplash.com/photo-1699116548117-875b3c4fd911?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
      created_at: "5th Sept, 2021",
      image_id: 'demo/nature',
      image_alt: "Waters and Trees",
      html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat quam eget porta sodales. Sed rhoncus ut eros sed fringilla. Quisque augue nulla, suscipit ut erat et, ornare mattis massa. Duis sed justo eu justo finibus pharetra eu vitae nunc. Phasellus congue pulvinar turpis a rutrum. Suspendisse vehicula purus eros, euismod volutpat lacus blandit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi blandit porttitor lacus, eu laoreet tortor laoreet sit amet. Quisque sed turpis eget erat pulvinar elementum eget et erat. Praesent non aliquet metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam, quam a vulputate lacinia, eros erat vulputate sem, nec porta lacus dolor dignissim velit. Fusce dictum in odio sit amet elementum.</p>
        <p>Phasellus ullamcorper neque vitae porta porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris imperdiet dictum quam, pharetra facilisis orci euismod ut. Vivamus quis luctus ex. Nam sit amet commodo quam. Fusce molestie enim eu mauris semper tincidunt. In suscipit suscipit imperdiet. Ut tempor gravida est, vel tristique metus auctor et. Aenean rhoncus at felis et dictum. In hac habitasse platea dictumst. Nullam imperdiet turpis quis purus sodales iaculis. Nullam eu nisl posuere, egestas nisl id, condimentum ante. Quisque vitae sodales nulla, eu ornare leo.</p>

        <h2>Tempus Eros</h2>
        <p>Maecenas tellus est, euismod tempus eros sagittis, tristique hendrerit quam. Fusce varius auctor risus. Aenean tempus turpis sem, et dictum turpis condimentum at. Ut risus arcu, hendrerit viverra ante ac, tincidunt euismod ligula. Nullam in ultricies quam. Proin sollicitudin nisi a congue blandit. Ut non ex tristique sem fringilla commodo et in ante. Aenean rutrum massa sed felis blandit, et suscipit leo faucibus. Phasellus quis rhoncus justo. Proin in diam mattis, dictum lectus et, finibus sem. Sed nec orci nibh. Etiam aliquet odio sit amet egestas eleifend. Vestibulum pellentesque ante et euismod sodales.</p>
        <img src='https://images.unsplash.com/photo-1699155758832-a80cdffc17e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D' />
        <p>Nunc tempus gravida lacinia. Donec eget vestibulum justo, et pellentesque velit. Ut gravida risus semper ligula rhoncus, vel dictum odio venenatis. Fusce eros sem, efficitur vitae pellentesque at, vestibulum at nunc. Phasellus finibus placerat purus ac vehicula. Aliquam mollis, augue a pulvinar scelerisque, quam nunc commodo augue, nec commodo ante metus nec eros. Suspendisse nec porta quam. Nullam dapibus elementum consectetur. Proin scelerisque sem semper scelerisque suscipit. Suspendisse sit amet consequat ligula, vel rutrum lectus. Sed accumsan dui sit amet tristique cursus. Proin cursus ultrices nulla.</p>
        <p>Nulla vel tristique diam. Morbi congue diam risus, sit amet maximus sem fringilla nec. Donec condimentum metus neque, nec vestibulum ipsum pharetra a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at elementum erat. Fusce vulputate consequat consectetur. Aliquam non enim ac lacus ultrices venenatis.</p>
      `
    },
  ])
</script>

<slot />
