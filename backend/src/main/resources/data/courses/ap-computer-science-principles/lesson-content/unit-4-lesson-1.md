## How the Internet Works – Packets, Protocols & Parallelism

You use the Internet every day. You stream videos on Netflix, send memes to friends on Snapchat, scroll through TikTok for hours, look up answers to random questions at 2 AM, and probably have no idea how any of it actually works. And honestly? Most people don't. They treat the Internet like magic – you click a link, and stuff appears.

But here's the thing: the Internet isn't magic. It's actually one of the most impressive engineering achievements in human history. Millions of miles of cable under the ocean. Satellites in space. Routers switching data millions of times per second. And somehow, when you send a message from your phone in New York, it reaches your friend in Tokyo within seconds.

How does that work? What happens when you click a link? Why doesn't the Internet break when billions of people use it at once? And what do packets, protocols, and routers actually do?

This module answers those questions. By the end, you'll understand the hidden infrastructure that powers modern life, why the Internet is designed the way it is, and how using multiple computers can solve problems faster than any single machine ever could.



## Networks and Devices – The Building Blocks

### What Is a Computer Network?

A **computer network** is a group of interconnected computing devices capable of sending or receiving data. That's the formal definition. In plain English: it's computers talking to each other.

Your home Wi-Fi is a small network – your laptop, phone, printer, smart TV, and maybe your friend's devices when they visit. Your school's computer lab is a network. A coffee shop's free Wi-Fi is a network. The Internet is what happens when you connect all these networks together – it's a **network of networks**.

### Computing Devices

A **computing device** is any physical artifact that can run a program. This includes things you probably think of as computers, plus a whole lot more:

| Device Type | Examples |
|-------------|----------|
| **Traditional computers** | Laptops, desktops, servers in data centers |
| **Mobile devices** | Smartphones, tablets, smartwatches |
| **Network devices** | Routers, switches, modems, access points |
| **Smart devices** | Smart TVs, thermostats, speakers, refrigerators, lights |
| **Sensors** | Temperature sensors, security cameras, motion detectors, traffic sensors |
| **Embedded systems** | Car computers, medical devices, industrial controllers |

Every single one of these can be part of a network. Your smart thermostat talks to your phone. Your car talks to the manufacturer. Your fitness tracker talks to the cloud.

### Computing Systems

A **computing system** is a group of computing devices and programs working together for a common purpose. A computer network is one type of computing system.

Think of an online banking app. The system includes:
- Your phone (computing device)
- The bank's servers (more computing devices)
- The network connecting them
- The app software and server software (programs)

All working together so you can check your balance.

### Paths and Routing

When two devices communicate, data travels along a **path** – a sequence of directly connected computing devices that begins at the sender and ends at the receiver.

Imagine you're sending a message to a friend across town:
1. Your phone sends to your Wi-Fi router
2. Router sends to a cable in your wall
3. Cable connects to a neighborhood junction box
4. Junction box connects to a larger hub
5. Hub connects to your friend's neighborhood
6. Finally reaches your friend's phone

Each step is a device along the path. The message might go through 10-20 devices before reaching its destination.

**Routing** is the process of finding a path from sender to receiver. It's like GPS for data. When you send a message, routers along the way figure out the best path based on current conditions.

### Bandwidth

**Bandwidth** is the maximum amount of data that can be sent in a fixed amount of time. Think of it as the width of a pipe:
- A narrow pipe (low bandwidth) lets through a trickle of water
- A wide pipe (high bandwidth) lets through a flood

Bandwidth is usually measured in **bits per second** (bps). Common measurements:

| Unit | Meaning | Example |
|------|---------|---------|
| **Kbps** | Kilobits per second (thousands) | Old dial-up Internet: 56 Kbps |
| **Mbps** | Megabits per second (millions) | Typical home Internet: 100-1000 Mbps |
| **Gbps** | Gigabits per second (billions) | Fiber connections: 1-10 Gbps |

Higher bandwidth means faster downloads, smoother streaming, and quicker loading times. Netflix recommends 25 Mbps for 4K streaming. If your bandwidth is lower, you'll get buffering or lower quality.



## The Internet – A Network of Networks

### What Is the Internet?

The **Internet** is a computer network consisting of interconnected networks that use standardized, open communication protocols.

Let's unpack that:

- **Interconnected networks** – It's not one big network. It's millions of networks (home networks, school networks, company networks, ISP networks) all connected together.
- **Standardized protocols** – Everyone agrees on the same rules for communication. Your laptop speaks the same language as servers in Japan.
- **Open protocols** – The rules are public. Anyone can use them without paying or asking permission. This is why new devices can join the Internet easily.

### No Central Control

Here's something surprising: **No single company or government runs the Internet**. There's no "Internet CEO" or "Internet president." Different organizations manage different parts, but no one controls the whole thing.

This is by design. The Internet was built to survive nuclear attack (seriously – it was a Cold War project). If one part gets destroyed, the rest keeps working.

### Connecting to the Internet

To access the Internet, you need to connect your computing device to an **Internet-connected device**. That sounds circular, but here's how it works:

1. Your phone connects to a cell tower (wireless)
2. Your laptop connects to a router (Wi-Fi or Ethernet)
3. That router connects to your ISP (Internet Service Provider) – companies like Comcast, Verizon, AT&T
4. Your ISP connects to larger networks
5. Those networks connect to even larger networks

Eventually, you're connected to everything.

### Protocols

A **protocol** is an agreed-upon set of rules that specify the behavior of a system. Think of it as a language that devices use to communicate.

When two people speak English, they follow rules: words have meanings, sentences have structure, you wait for the other person to finish before speaking. Protocols are the same for computers.

The Internet uses **open protocols**, which means:
- The rules are publicly documented
- Anyone can implement them
- Devices from different manufacturers can work together
- New devices can join easily

Imagine if every company used a different, secret protocol. Apple devices could only talk to Apple devices. Samsung could only talk to Samsung. The Internet wouldn't work. Open protocols are what make universal communication possible.

### Dynamic Routing

Routing on the Internet is usually **dynamic** – it's not specified in advance. When you send data, routers along the way decide the best path based on current conditions:

- Which paths are available?
- Which paths are congested?
- Which paths are fastest?

If one path is clogged with traffic or broken, data automatically takes another route. This is like GPS recalculating when there's a traffic jam – the destination is the same, but the route changes.

### Scalability

**Scalability** is the capacity for a system to change in size and scale to meet new demands.

The Internet was designed to be scalable from the beginning. In the 1980s, no one imagined billions of devices. But the designers built it to grow, and grow it did:

- 1990: About 300,000 devices
- 2000: About 100 million devices
- 2010: About 2 billion devices
- 2024: Estimates over 15 billion connected devices

And it still works. That's scalability.



## Packets – How Data Travels

### Data Streams and Packets

Information is passed through the Internet as a **data stream**. But here's the key: it's not sent as one continuous stream. It's broken into chunks called **packets**.

Why break data into packets? Several reasons:

| Reason | Explanation |
|--------|-------------|
| **Error recovery** | If one packet gets lost, only that piece needs to be resent – not the whole file |
| **Load balancing** | Different packets can take different routes, spreading the load across the network |
| **Fairness** | Large files don't block the network for everyone else – packets from different users interleave |
| **Efficiency** | Routers can handle small chunks more easily than huge streams |

### What's in a Packet?

Each packet contains two main parts:

1. **Payload** – The actual chunk of data (part of your file, message, video, etc.)
2. **Metadata** – Information about the packet, including:
   - Source IP address (where it came from)
   - Destination IP address (where it's going)
   - Sequence number (where this piece fits in the whole)
   - Error checking information (to detect corruption)
   - Time-to-live (how many hops before it's discarded)
   - Protocol information (what kind of data this is)

Think of it like mailing a book one page at a time. Each envelope contains:
- One page (payload)
- Your address and your friend's address (metadata)
- Page number (sequence number)
- Your return address (source)

### Packets May Arrive Out of Order

Here's something that surprises most people: **Packets may arrive at the destination in order, out of order, or not at all**.

Remember the book-by-mail example. You mail page 1, then page 2, then page 3. But page 2 gets delayed, page 3 arrives first, and page 1 gets lost completely. The receiver has to figure out what happened.

On the Internet, this happens constantly. Packets take different routes. Some routes are faster. Some packets get delayed. Some get dropped entirely.

The receiving device uses **sequence numbers** to:
- Detect when packets are out of order
- Reassemble them correctly
- Detect missing packets
- Request retransmission of missing packets

This is all handled automatically by protocols like TCP.

### Common Internet Protocols

| Protocol | Name | Purpose | Reliability |
|----------|------|---------|-------------|
| **IP** | Internet Protocol | Handles addressing and routing – like the postal service | Unreliable |
| **TCP** | Transmission Control Protocol | Ensures reliable delivery, orders packets, requests retransmission | High |
| **UDP** | User Datagram Protocol | Faster but less reliable – no guarantee of delivery or order | Low |

**IP** is the foundation. Every device gets an IP address (like 192.168.1.1). IP gets packets from source to destination, but it doesn't guarantee they arrive or arrive in order.

**TCP** adds reliability on top of IP. It:
- Breaks data into packets
- Numbers them
- Sends them
- Waits for acknowledgments
- Resends lost packets
- Reassembles in correct order

TCP is used when reliability matters – web pages, emails, file transfers, messages.

**UDP** is simpler and faster. It just sends packets and hopes for the best. No acknowledgments, no retransmission, no ordering. UDP is used when speed matters more than reliability:
- Video streaming (a few lost pixels are okay)
- Online gaming (old data is worse than no data)
- Voice calls (delayed audio is worse than slightly garbled audio)
- DNS lookups (one packet, quick response)


## Internet vs. World Wide Web

People use these terms interchangeably, but they're completely different. Let's settle this once and for all.

| | Internet | World Wide Web |
|------|----------|----------------|
| **What it is** | The physical network of computers, cables, routers, and satellites | A system of linked pages, programs, and files |
| **Analogy** | The highway system | The cars, trucks, and deliveries on the highway |
| **Protocols** | IP, TCP, UDP | HTTP, HTTPS |
| **Examples** | The infrastructure that connects everything | Websites, web apps, links, browsers |
| **When it started** | 1960s-1980s | 1990s |

The **World Wide Web** uses the Internet. When you type a web address, your browser uses **HTTP** (Hypertext Transfer Protocol) to request a page, and that request travels over the Internet using TCP/IP.

But the Internet does much more than the Web:
- Email uses SMTP, POP3, IMAP
- Messaging apps use their own protocols
- Video calls use WebRTC, SIP
- Online gaming uses custom UDP-based protocols
- File sharing uses BitTorrent, FTP

So next time someone says "I'm on the Internet" when they mean "I'm looking at websites," you can gently correct them. Or don't. But at least you'll know.


## Fault Tolerance – Why the Internet Doesn't Break

### What Is Fault Tolerance?

A **fault-tolerant** system can support failures and still continue to function. This is crucial because elements of complex systems fail at unexpected times, often in groups. Fault tolerance allows users to continue using the network even when parts break.

Think about your body. If you cut your finger, you don't die. Your body is fault-tolerant – it handles failures at the local level. The Internet works the same way.

The Internet was engineered to be fault-tolerant from the beginning. Its original design goal was to survive nuclear war. If Moscow got nuked, Washington still needed to communicate with London. That meant no single point of failure.

### Redundancy

**Redundancy** is the inclusion of extra components that can be used to mitigate failure if other components fail.

Think of an airplane with multiple engines. If one engine fails, the others keep the plane flying. The extra engines are redundant – not needed for normal operation, but essential when things go wrong.

On the Internet, redundancy means having **more than one path between any two connected devices**. If one path fails, data can travel a different route.

```
┌─────────────────────────────────────────────────┐
│                 NETWORK REDUNDANCY               │
│                                                   │
│  Without redundancy:                              │
│    A ─────── B ─────── C                         │
│    ↑         ↑         ↑                         │
│  Phone    Router    Server                        │
│                                                   │
│  If the A-B link fails, A can't reach C at all    │
│                                                   │
│  With redundancy:                                 │
│        ┌── B ──┐                                  │
│        │       │                                  │
│        A───────D───────C                          │
│        │       │       │                          │
│        └─────── E ─────┘                          │
│                                                   │
│    Multiple paths between every pair               │
│    If any single link fails,                      │
│    data finds another route                       │
└─────────────────────────────────────────────────┘
```

### How the Internet Achieves Fault Tolerance

1. **Multiple paths** – Data can always find another route. The Internet is a mesh, not a line.
2. **Dynamic routing** – Routers detect failures and update paths automatically, often in milliseconds.
3. **Redundant infrastructure** – Multiple undersea cables connect continents. If one cable is cut, traffic shifts to others.
4. **Distributed servers** – Websites are hosted on multiple servers worldwide. If one server fails, others take over.
5. **Backup power** – Routers and data centers have batteries and generators.

### Real-World Examples of Fault Tolerance

**Undersea cables**: There are over 400 active undersea cables carrying Internet traffic between continents. If a shark chews through one cable (yes, this happens), traffic automatically reroutes through other cables.

**Data centers**: Google, Amazon, and Facebook run multiple data centers worldwide. If one data center loses power, your data is still available from another.

**Your home network**: Your Wi-Fi router probably has multiple devices connected. If your laptop loses connection, your phone might still work. That's local redundancy.

### Benefits and Costs

Redundancy requires **additional resources** – more cables, more routers, more equipment, more maintenance. This costs money.

But it provides the benefit of **fault tolerance**. The Internet's designers decided this trade-off was worth it. A slightly more expensive network that keeps working is better than a cheap network that fails constantly.

The redundancy of routing options between two points increases the reliability of the Internet and helps it scale to more devices and more people.


## Parallel and Distributed Computing

### Sequential Computing

**Sequential computing** is a computational model in which operations are performed in order, one at a time.

Most programs you've written so far are sequential. One step finishes, then the next starts. It's like washing dishes alone – you wash one dish, dry it, put it away, then start the next.

Sequential is simple and predictable, but it's slow for big problems. A sequential solution takes as long as the sum of all its steps.

### Parallel Computing

**Parallel computing** is a computational model where the program is broken into multiple smaller sequential computing operations, some of which are performed simultaneously.

Think of washing dishes with a friend:
- One person washes
- Another dries
- They work at the same time

That's parallel computing – multiple tasks happening simultaneously.

```
┌─────────────────────────────────────────────────┐
│              PARALLEL COMPUTING                  │
│                                                   │
│  Sequential:                                      │
│  Task A → Task B → Task C → Task D                │
│  Total time = A + B + C + D                       │
│                                                   │
│  Parallel (2 processors):                         │
│  Processor 1: Task A → Task C                     │
│  Processor 2: Task B → Task D                     │
│  Total time = max(A+C, B+D)                       │
│                                                   │
│  Parallel (4 processors):                         │
│  All tasks at once                                │
│  Total time = max(A, B, C, D)                     │
└─────────────────────────────────────────────────┘
```

### Distributed Computing

**Distributed computing** is a computational model in which multiple devices are used to run a program. The devices might be in the same room or across the world.

Distributed computing allows problems to be solved that couldn't be solved on a single computer because of:
- **Processing time** – Too much calculation for one machine
- **Storage needs** – Too much data for one machine
- **Geographic requirements** – Data needs to be processed near where it's collected

Google searches are handled by thousands of computers working together. When you search, your query goes to multiple servers simultaneously, each searching part of the index, then results are combined.

### Comparing Efficiency

Let's compare sequential and parallel solutions with an example:

A task has three parts:
- Part A: 10 seconds
- Part B: 15 seconds
- Part C: 5 seconds

**Sequential execution:**
10 + 15 + 5 = 30 seconds

**Parallel execution** (if all parts can run simultaneously on different processors):
The longest single part determines the time: max(10, 15, 5) = 15 seconds

**Speedup** is measured as:
```
speedup = sequential time / parallel time
```
In this example: 30 / 15 = 2× faster

### The Sequential Portion Limit

Here's the catch: most programs have parts that must run sequentially. You can't parallelize everything.

A program typically has:
- A **parallel portion** – parts that can run simultaneously
- A **sequential portion** – parts that must run in order

**Amdahl's Law** (conceptually): The speedup from parallel computing is limited by the sequential portion. Even if you add infinite processors, the sequential part still takes the same time.

Example:
- Program: 90% parallelizable, 10% sequential
- With 10 processors: theoretical max speedup = about 5×
- With 100 processors: theoretical max speedup = about 9×
- With infinite processors: still limited to 10× because of that 10% sequential part

This means at some point, adding more parallel processors will no longer meaningfully increase efficiency. The sequential portion becomes the bottleneck.

### Benefits of Parallel and Distributed Computing

| Benefit | Description | Example |
|---------|-------------|---------|
| **Speed** | Solve problems faster | Weather forecasting in hours instead of weeks |
| **Scale** | Handle larger problems | Indexing the entire web |
| **Storage** | Combine storage across machines | Cloud storage like Google Drive |
| **Reliability** | If one computer fails, others keep working | Websites stay up during server failures |
| **Geography** | Process data near where it's collected | Edge computing in IoT devices |
| **Cost** | Use many cheap computers instead of one supercomputer | Google's data centers use commodity hardware |

### Real-World Examples

**Weather forecasting**
- Atmospheric models are massively complex
- Run on supercomputers with thousands of processors
- Simulate the entire planet's weather
- Produce forecasts in hours instead of weeks

**Google Search**
- Billions of web pages indexed
- Query distributed across thousands of servers
- Each server searches part of the index
- Results combined in milliseconds

**Bitcoin mining**
- Distributed across computers worldwide
- No central server
- All miners compete to solve mathematical problems
- Network collectively maintains the blockchain

**Folding@home**
- Volunteers' computers simulate protein folding
- Distributed across millions of machines
- Helps research diseases like Alzheimer's, COVID-19
- Would be impossible on any single supercomputer

**Content Delivery Networks (CDNs)**
- Netflix, YouTube, Amazon use CDNs
- Content cached on servers worldwide
- You download from nearby server, not central location
- Faster, less load on central infrastructure


## Putting It All Together – A Complete Example

Let's trace what happens when you visit a website. This brings together everything from this module:

**1. You type a URL** – `https://www.example.com`

**2. DNS lookup** – Your computer doesn't know what `www.example.com` means. It asks a DNS (Domain Name System) server. DNS is like the phone book of the Internet. The DNS server responds with an IP address: `93.184.216.34`.

**3. TCP connection** – Your computer establishes a TCP connection with that IP address. This involves a three-way handshake:
   - Your computer: "Can we talk?"
   - Server: "Yes, let's talk."
   - Your computer: "Great, connected."

**4. HTTP request** – Your browser sends an HTTP GET request: "Please send me the webpage at /".

**5. Packet creation** – That request is broken into packets. Each packet gets:
   - Source IP: your IP
   - Destination IP: 93.184.216.34
   - Sequence number: 1, 2, 3...
   - TCP port information
   - The actual data chunk

**6. Routing** – Each packet is sent to your router, then to your ISP, then across the Internet. Routers along the way examine the destination IP and forward the packet toward its destination. Different packets might take different routes.

**7. Server receives** – The server's network interface receives packets, possibly out of order. TCP reassembles them in correct order using sequence numbers. If any packets are missing, TCP requests retransmission.

**8. Server responds** – The web server processes the request and sends back the webpage, also broken into packets.

**9. More routing** – Response packets travel back across the Internet, again possibly taking different routes.

**10. Your browser reassembles** – Your computer receives packets, reassembles them in order, and displays the webpage.

Throughout this process:

- **IP** handles addressing and routing
- **TCP** ensures reliable delivery and ordering
- **Redundancy** means if any link fails, packets find another way
- **Distributed systems** – DNS servers, web servers, and the network infrastructure are all distributed
- **Bandwidth** affects how fast this all happens

All of this happens in milliseconds. You never see any of it. You just see the page.


## Module 10 Summary

### Networks and Devices
- **Computing devices** – physical artifacts that run programs (computers, phones, routers, sensors, smart devices)
- **Computing system** – group of devices and programs working together
- **Computer network** – interconnected devices capable of sending/receiving data
- **Path** – sequence of devices from sender to receiver
- **Routing** – process of finding a path
- **Bandwidth** – maximum data per second (bits per second)

### The Internet
- **Internet** – network of networks using standardized, open protocols
- Access requires connecting to an Internet-connected device
- **Protocol** – agreed-upon set of rules for communication
- Internet protocols are **open** – anyone can implement them
- Routing is **dynamic** – paths adjust in real time based on conditions
- **Scalability** – designed to grow from thousands to billions of devices

### Packets
- Data is broken into **packets** for efficiency and reliability
- Each packet contains **payload** (data chunk) and **metadata** (addresses, sequence numbers, error checking)
- Packets may arrive **out of order** or not at all
- **IP** – Internet Protocol, handles addressing and routing (unreliable)
- **TCP** – Transmission Control Protocol, ensures reliable delivery, ordering, retransmission
- **UDP** – User Datagram Protocol, faster but less reliable, no guarantees

### Internet vs. World Wide Web
- **Internet** – the physical network infrastructure
- **World Wide Web** – system of linked pages using HTTP
- The Web **uses** the Internet, but the Internet does much more

### Fault Tolerance
- **Fault-tolerant** systems continue functioning despite failures
- **Redundancy** – extra components to mitigate failures
- Multiple paths between devices ensure alternate routes
- Dynamic routing automatically adapts to failures
- Requires more resources but provides reliability
- Essential for a global network that never stops

### Parallel and Distributed Computing
- **Sequential** – one operation at a time
- **Parallel** – multiple operations simultaneously on one machine
- **Distributed** – multiple machines working together
- Speedup = sequential time / parallel time
- Limited by **sequential portion** – can't parallelize everything
- Enables solving problems too large for single computers
- Examples: weather forecasting, Google Search, Bitcoin, Folding@home


## 📋 Quick Reference Card

| Concept | Definition |
|---------|------------|
| **Network** | Interconnected computing devices |
| **Path** | Sequence of devices from sender to receiver |
| **Routing** | Finding a path through the network |
| **Bandwidth** | Maximum data per second (bps) |
| **Protocol** | Agreed-upon rules for communication |
| **Packet** | Chunk of data + metadata |
| **IP** | Internet Protocol (addressing, routing) |
| **TCP** | Reliable delivery, ordering, retransmission |
| **UDP** | Fast but unreliable |
| **Fault tolerance** | System continues after failures |
| **Redundancy** | Extra components for backup |
| **Sequential** | One operation at a time |
| **Parallel** | Multiple operations at once on one machine |
| **Distributed** | Multiple machines working together |
| **Speedup** | Sequential time / parallel time |

### Common Protocols

| Protocol | Purpose |
|----------|---------|
| IP | Addressing and routing |
| TCP | Reliable, ordered delivery |
| UDP | Fast, unreliable delivery |
| HTTP | Web page transfer |
| HTTPS | Encrypted web page transfer |

### Bandwidth Examples

| Activity | Recommended Bandwidth |
|----------|---------------------|
| Web browsing | 1-5 Mbps |
| HD video streaming | 5-10 Mbps |
| 4K video streaming | 25 Mbps |
| Online gaming | 3-10 Mbps (latency matters more) |
| Video calls | 1-4 Mbps |

### Packet Contents

```
┌─────────────────────────────────────┐
│            PACKET                    │
├─────────────────────────────────────┤
│ METADATA:                            │
│ • Source IP: 192.168.1.5            │
│ • Dest IP:   93.184.216.34          │
│ • Sequence:  42 of 150               │
│ • TTL:       64                       │
│ • Checksum:  0x4F2A                   │
├─────────────────────────────────────┤
│ PAYLOAD:                             │
│ "GET /index.html HTTP/1.1"           │
│ "Host: www.example.com"               │
│ "User-Agent: Chrome/120.0"            │
└─────────────────────────────────────┘
```


You now understand the hidden infrastructure that powers modern life. The Internet isn't magic – it's packets, protocols, paths, and redundancy, all working together across millions of devices.